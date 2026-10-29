class Inventory{

    constructor(){
        this.inventoryItems = page.locator('[data-test="inventory-item"]');
        this.cartBadge = page.locator(".shopping_cart_badge");
    }

    getProductCard(productname){
    return this.inventoryItems.filter({ hasText: productname });

    }

    async addProductToCart(productName){

        const product = this.getProductCard(productName);
        await product.getByRole("button", { name: "Add to cart" }).click();

    }

    async getCarCount(){
        const hasBadge = await this.cartBadge.count();
        if(hasBadge > 0) return 0;

        return parseInt(await this.cartBadge.textContent(),10);

    }

}
module.exports = {Inventory};

