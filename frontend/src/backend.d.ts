import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface Item {
    id: bigint;
    name: string;
    price: bigint;
}
export type Time = bigint;
export interface RequestSummary {
    deliveryAddress: string;
    paymentMethod: string;
    selectedItemsIds: Array<bigint>;
}
export interface Order {
    id: bigint;
    total: bigint;
    paymentMethod: string;
    timestamp: Time;
    isConfirmed: boolean;
    items: Array<Item>;
    receipts: Array<ExternalBlob>;
}
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    getOrder(orderId: bigint): Promise<Order | null>;
    getOrderConfirmation(orderId: bigint): Promise<{
        orderId: bigint;
        confirmationMessage: string;
    }>;
    getOrderHistorySummary(): Promise<Array<Order>>;
    getOrderStatus(orderId: bigint): Promise<string>;
    placeOrder(_request: RequestSummary): Promise<bigint>;
}
