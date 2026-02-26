# Specification

## Summary
**Goal:** Ensure that placing an order always succeeds and navigates to the confirmation page, regardless of payment method or backend errors.

**Planned changes:**
- Update the `usePlaceOrder` mutation in `frontend/src/hooks/useQueries.ts` so that if the backend call fails or returns an error, the frontend still navigates to the `OrderConfirmationPage` with a valid order ID.
- Update the `CheckoutSection` component so no error state or failure path can block order confirmation after clicking "Place Order".
- Update the `placeOrder` function in `backend/main.mo` to always return a valid order ID, never trap or return an error variant, and reliably store the order in the in-memory Map.

**User-visible outcome:** Clicking "Place Order" with either COD or GPay always takes the user to the order confirmation page with a valid order ID, and no error or failure screen is ever shown.
