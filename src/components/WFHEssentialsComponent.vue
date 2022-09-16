<template>
  <div class="container">
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4"
      >
        <div class="product-item">
          <router-link :to="'/Electronics/' + product.id" target="_blank">
            <img class="img-fluid" :src="product.src" alt="" />
          </router-link>
          <div class="p-3">
            <h2>{{ product.name }}</h2>
            <hr />
            <div class="row mt-2">
              <div class="col-6">
                <h2>{{ product.price + " $" }}</h2>
              </div>
              <div class="col-6 text-end">
                <h2 class="me-1">{{ product.arriveDuration }}</h2>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <input
                class="btn rounded-pill text-center"
                @click="addtocart(product)"
                type="button"
                value="Add to cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      cart: [],
    };
  },

  async created() {
    const res = await fetch("http://localhost:3000/WFHEssentials");
    this.products = await res.json();
    const res2 = await fetch("http://localhost:3000/cart");
    this.cart = await res2.json();
  },

  methods: {
    async addtocart(v) {
      var isExist = false;
      for (var item in this.cart) {
        if (this.cart[item].id == v.id) {
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
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        this.cart.push(v);

        await fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(v),
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 90px;
}
.product-item {
  border: 1px solid #e2eaf0;
  border-radius: 5px;
  overflow: hidden;
}

h2 {
  color: #313131;
  font-size: 15px;
}
input {
  border: 1px solid rgb(0, 223, 223);
  border-radius: 10px;
  padding: 9px 25%;
  color: rgb(0, 223, 223);
}
</style>
