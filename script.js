/*

const goods = [
{title: 'Shirt', price: 150,image: 'item1.jpg' },
{title: 'Socks', image: 'item2.jpg'},
{title: 'Jacket', price: 350, image: 'item3.jpg'},
{title: 'Shoes', price: 250, image: 'item4.jpg'},
{title: 'Shoes', price: 250, image: 'item5.jpg'},
{title: 'Shoes', price: 250, image: 'item6.jpg'},
{title: 'Shoes', price: 250, image: 'item7.jpg'},
{title: 'Shoes', price: 250, image: 'item8.jpg'}
];

const getGoodsItemTemplate = ({ title, price = 150, image }) => {
  return `<div class="item">
              <div class="bgimg">
              <img src="img/${image}" alt="product class="productImg"">
                <div class="bgimg-black">
                  <button><img src="img/addcart.png" alt="cart"> Add to Cart</button>
                </div>
              </div>
              <div class="price">
                <h3>${title}</h3>
                <p>${price}$</p>
              </div>
            </div>`;
}
const renderGoods = () => {
  const goodsTemplates = goods.map(item => getGoodsItemTemplate(item)).join(" ");
  const wrapper = document.querySelector(".goods-list");
  wrapper.innerHTML = goodsTemplates;
}
renderGoods();
*/


/*fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
    .then(response => response.json())
    .then(json => list.getGoods(json))
    .then(json => list.render(json))
    .then(json => list.sumGoodsList(json))


class GoodsList {
    goods = [];

    __getGoodsItemTemplate({ product_name, price, id_product }) {
        return `<div class="item">
                    <div class="bgimg">
                    <img src="img/${id_product}.png" alt="product" class="productImg"">
                      <div class="bgimg-black">
                        <button><img src="img/addcart.png" alt="cart"> Add to Cart</button>
                      </div>
                    </div>
                    <div class="price">
                      <h3>${product_name}</h3>
                      <p>${price}$</p>
                    </div>
                  </div>`;
    };

    getGoods(goods) {
        this.goods = goods;
    }

    render() {
        const goodsTemplates = this.goods.map(item => this.__getGoodsItemTemplate(item)).join("");
        const wrapper = document.querySelector('.goods-list');
        wrapper.innerHTML = goodsTemplates;
    }

    sumGoodsList() {
        let array = this.goods;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + parseInt(array[i].price);
        }
        console.log(`Общая стоимость товаров ${sum}₽`);
    }


}

const list = new GoodsList();

class BascetList extends GoodsList {
    bascet = [];

}

const bascetList = new BascetList();

const button = document.querySelectorAll('.cartButton');
button.forEach(elem => addToBascet(elem));
function addToBascet(item) {
    item.addEventListener('click', function () {
        console.log("www");
    })
}
*/
const BASE_URL = 'https://mock-api-builder.vercel.app/api/schema/get';

const app = new Vue({
  el: '#root',
  data: {
    showCart: false,
    cartItems: [],
    goods: [],
    filteredGoods: [],
    searchGoods: '',
    errorMessage: '',
  },
  methods: {
    toggleCart() {
      this.showCart = !this.showCart;
    },
    addToCart(item) {
      let existant = false;
      for (const goodsItem of this.cartItems) {
        if (goodsItem.id === item.id) {
          existant = true;
          goodsItem.quantity += 1;
        }
      }

      if (!existant) {
        this.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(id) {},
    filterGoods() {
      if (!this.goods.length) this.filteredGoods = [];
      if (!this.searchGoods) this.filteredGoods = this.goods;
      this.filteredGoods = this.goods.filter(i => i.productName.toLowerCase().includes(this.searchGoods.toLowerCase()));
    },
    getGoods() {
      fetch(`${BASE_URL}/602c166a89c4a60009ef7046`)
        .then(r => r.json())
        .then(r => {
          this.goods = r;
          this.filteredGoods = this.goods;
        })
        .catch(e => {
          this.errorMessage = e;
        });
    },
  },
  mounted() {
    this.getGoods();
  },
});
