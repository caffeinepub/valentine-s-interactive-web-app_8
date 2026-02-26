import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Text "mo:core/Text";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type Item = {
    id : Nat;
    name : Text;
    price : Nat;
  };

  type Order = {
    id : Nat;
    items : [Item];
    total : Nat;
    paymentMethod : Text;
    timestamp : Time.Time;
    isConfirmed : Bool;
    receipts : [Storage.ExternalBlob];
  };

  let orders = Map.empty<Nat, Order>();
  var currentOrderId = 0;

  public type RequestSummary = {
    selectedItemsIds : [Nat];
    deliveryAddress : Text;
    paymentMethod : Text;
  };

  public shared ({ caller }) func placeOrder(_request : RequestSummary) : async Nat {
    let items : [Item] = [
      { id = 3; name = "Super Dumpling - 846 Ronny Lodge"; price = 14 },
      { id = 4; name = "Masala Fries - Chauhan's Diner"; price = 6 },
      { id = 5; name = "IDK Combo - Polly's"; price = 20 },
    ];

    currentOrderId += 1;
    let order : Order = {
      id = currentOrderId;
      items;
      total = 0;
      paymentMethod = "N/A";
      timestamp = Time.now();
      isConfirmed = true;
      receipts = [];
    };

    orders.add(currentOrderId, order);
    currentOrderId;
  };

  public query ({ caller }) func getOrder(orderId : Nat) : async ?Order {
    orders.get(orderId);
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray();
  };

  public query ({ caller }) func getOrderStatus(orderId : Nat) : async Text {
    switch (orders.get(orderId)) {
      case (null) { "Order not found!" };
      case (?order) {
        if (order.isConfirmed) {
          "Ordered.";
        } else {
          "Processing";
        };
      };
    };
  };

  public query ({ caller }) func getOrderConfirmation(orderId : Nat) : async {
    orderId : Nat;
    confirmationMessage : Text;
  } {
    switch (orders.get(orderId)) {
      case (null) { { orderId; confirmationMessage = "Order not found!" } };
      case (?_) {
        {
          orderId;
          confirmationMessage = "Successful!";
        };
      };
    };
  };

  public query ({ caller }) func getOrderHistorySummary() : async [Order] {
    orders.values().toArray();
  };
};
