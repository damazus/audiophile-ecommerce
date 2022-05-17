<script>
import {mapState, mapActions} from 'pinia'
import { useCart } from './store/cart'
import CartProduct from './components/CartProduct.vue'

export default {
  components: {
    CartProduct
  },
  computed: {
    ...mapState(useCart, ['carts', 'total']),
  },
  methods: {
    ...mapActions(useCart, ['removeAll']),
    removeAllAndClose(){
      this.$emit('close')
      this.removeAll()
    }
  },
}
</script>

<template>
  <div class="section">
    <div class="container">
      <h1 class="h3">CHECKOUT</h1>
      <form class="form-custom">
        <div class="row">
          <div class="col-lg-8">
            <div class="form-custom__section">
              <h4 class="form-custom__section-title">Billing Details</h4>
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>Name</span>
                    <input type="text" class="form-control" placeholder="Alexei Ward" />
                  </label>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>Email Address</span>
                    <input type="text" class="form-control" placeholder="alexei@mail.com" />
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>Phone Number</span>
                    <input type="text" class="form-control" placeholder="+1 202-555-0136" />
                  </label>
                </div>
              </div>
            </div>

            <div class="form-custom__section">
              <h4 class="form-custom__section-title">shipping info</h4>
              <div class="form-row">
                <div class="form-group col-lg-12">
                  <label class="form-label">
                    <span>Address</span>
                    <input type="text" class="form-control" placeholder="1137 Williams Avenue" />
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>ZIP Code</span>
                    <input type="text" class="form-control" placeholder="10001" />
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>City</span>
                    <input type="text" class="form-control" placeholder="New York" />
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>Country</span>
                    <input type="text" class="form-control" placeholder="United States" />
                  </label>
                </div>
              </div>
            </div>

            <div class="form-custom__section">
              <h4 class="form-custom__section-title">payment details</h4>
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>Payment Method</span>
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>e-Money</span>
                    <input type="text" class="form-control" placeholder="6891" />
                  </label>
                  <label class="form-label">
                    <span>Cash on Delivery</span>
                    <input type="text" class="form-control" placeholder="6891" />
                  </label>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>e-Money Number</span>
                    <input type="text" class="form-control" placeholder="238521993" />
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <label class="form-label">
                    <span>e-Money PIN</span>
                    <input type="text" class="form-control" placeholder="6891" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="checkout-summary">
              <h3 class="checkout-summary__title">summary</h3>
              <div class="checkout-summary__products">
                <CartProduct v-for="(cart, index) in carts" :cart="cart" :key="index"/>
              </div>
              <ul>
                <li>
                  <span>TOTAL</span>
                  <span>$ 5,396</span>
                </li>
                <li>
                  <span>SHIPPING</span>
                  <span>$ 50</span>
                </li>
                <li>
                  <span>VAT (INCLUDED)</span>
                  <span>$ 1,079</span>
                </li>
                <li>
                  <span>GRAND TOTAL</span>
                  <span>$ 5,446</span>
                </li>
              </ul>

              <button class="button button--primary">CONTINUE & PAY</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>