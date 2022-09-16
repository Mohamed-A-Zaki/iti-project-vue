<template>
  <div class="pro-details">
    <div class="container">
      <h3 class="position-relative mb-5 pb-2">Product Details</h3>
      <div class="row g-4">
        <div class="col-lg-4">
          <div class="image">
            <img :src="this.product.src" alt="" class="img-fluid" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="description">
            <div class="name h2 position-relative m-0 pb-2">
              {{ this.product.name }}
            </div>
            <p class="text-black-50 mt-3">
              Embrace the world’s most powerful smartphone with iPhone 11 Pro.
              Expand your view with cutting-edge triple-camera system and Super
              Retina XDR display that’s designed to immerse you in vibrant
              true-to-life details. Featuring a stainless steel frame and
              sculpted glass design, push the boundaries of what a smartphone
              can do with the new iPhone 11 Pro.
            </p>
            <div class="features">
              <div
                class="row flex-column flex-lg-row my-3 py-3 border-bottom g-3"
              >
                <div class="col">
                  <div>
                    <div class="h5">Safety & Usage</div>
                    <ul class="text-black-50 m-0">
                      <li>Avoid touching the screen with dirty/oily hands</li>
                      <li>Use a sturdy phone cover to keep it safe</li>
                      <li>Keep your phone locked to protect your data</li>
                    </ul>
                  </div>
                </div>
                <div class="col">
                  <div>
                    <div class="h5">Features & Specs</div>
                    <ul class="text-black-50 m-0">
                      <li>Avoid touching the screen with dirty/oily hands</li>
                      <li>Use a sturdy phone cover to keep it safe</li>
                      <li>Keep your phone locked to protect your data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="price">
              <span class="text-black-50">Price : </span>
              ${{ this.product.price }}
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
      // electronics: [],
      // targetElectronic: {},
      // isShown: false,
      product: {},
    };
  },
  // async created() {
  //   const res = await fetch("http://localhost:3000/electronics");
  //   this.students = await res.json();

  //   let id = this.$route.params.id;
  //   for (let electronic in this.electronics) {
  //     if (this.electronics[electronic].id == id) {
  //       console.log(this.electronics[electronic]);
  //       this.targetElectronic = this.electronics[electronic];
  //     }
  //   }
  // },
  async created() {
    // console.log(this.$route.params);
    const { category, id } = this.$route.params;

    this.product = await (
      await fetch(`http://localhost:3000/${category}/${id}`)
    ).json();

    // console.log(this.product.src);
  },
};
</script>

<style scoped>
.pro-details .container {
  padding: 90px 0;
}
::after {
  content: "";
  position: absolute;
  width: 80px;
  height: 3px;
  bottom: 0;
  left: 0;
}
.pro-details h3::after {
  background-color: #f00;
}
.pro-details .name::after {
  background-color: #ccc;
}
</style>
