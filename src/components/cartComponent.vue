<template>
  <div class="container">
    <div v-if="cart == ''" class="text-center no-cart">
      <img width="250" src="../../public/imgs/no-cart.png" alt="" />
      <h3 class="mt-3">No items in cart</h3>
      <p class="text-black-50">
        Add a few items to your cart and come back here for an <br />express
        checkout process!
      </p>
    </div>
    <div v-else class="cart-items">
      <div v-for="item in cart" :key="item.id">
        <div class="row">
          <div class="col-8">
            <div class="row mt-5 align-items-center">
              <div class="col-2">
                <img class="img-fluid" :src="item.src" alt="" />
              </div>
              <div class="col-3">
                <div>
                  <h5 class="">{{ item.name }}</h5>
                </div>
              </div>
              <div class="col-2">
                <h5>{{ "$" + item.price }}</h5>
              </div>
              <div class="col-2">
                <span class="text-black-50 fs-5">Quantity: </span
                ><span class="fs-5">{{ item.quantity }}</span>
              </div>
              <div class="col-2">
                <i
                  class="fa-solid fa-plus text-success"
                  @click="pluscart(item)"
                ></i>
                |
                <i
                  class="fa-solid fa-minus text-danger"
                  @click="minuscart(item)"
                >
                </i>
              </div>
              <div class="col-1">
                <i
                  class="fa-solid fa-xmark text-danger fs-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="targetItem = item"
                ></i>
              </div>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Item</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h5>Are you Sure to Delete ({{ targetItem.name }}) from cart?</h5>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
              @click="deleteItem(targetItem)"
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--End of modal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      targetItem: {},
    };
  },

  async created() {
    var res = await fetch("http://localhost:3000/cart");
    this.cart = await res.json();
  },

  methods: {
    async deleteItem(v) {
      this.cart = this.cart.filter((itm) => itm.id != v.id);

      await fetch(`http://localhost:3000/cart/${v.id}`, {
        method: "DELETE",
      });
    },
    async pluscart(v) {
      for (var item in this.cart) {
        if (this.cart[item].name == v.name) {
          this.cart[item].quantity++;

          await fetch(`http://localhost:3000/cart/${v.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: v.name,
              src: v.src,
              price: v.price,
              arriveDuration: v.arriveDuration,
              quantity: this.cart[item].quantity,
            }),
          });
        }
      }
    },
    async minuscart(v) {
      if (v.quantity == 1) {
        this.deleteItem(v);
      } else {
        for (var item in this.cart) {
          if (this.cart[item].name == v.name) {
            this.cart[item].quantity--;

            await fetch(`http://localhost:3000/cart/${v.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: v.name,
                src: v.src,
                price: v.price,
                arriveDuration: v.arriveDuration,
                quantity: this.cart[item].quantity,
              }),
            });
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  transition: all 0.2s;
}
.no-cart {
  margin: 150px 0;
}
.cart-items {
  margin: 90px 0;
}
.cart-items img {
  border-radius: 8px;
}
</style>
