# Wordpress常用插件

- 邮件模板
  - **yaymail**
- 多语言插件
  - **weglot**
- 网站搬家
  - **all in one migation**
- 增强woocommerse功能的插件
  - 代码运行：**Code Snippets**
   ```php
    //隐藏Woocommerce商城中的加入购物车功能和实现隐藏价格标签的代码

    add_filter( 'woocommerce_is_purchasable', '__return_false');
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );

    // 如果你不想要显示提示信息，请把这一段删除即可
    add_action( 'woocommerce_single_product_summary', 'optional_message', 20 );
    function optional_message() {
    echo '<p class="woocommerce-message">Please send an email to iwideal@outlook.com to contact us.</p>';
    }

    // 隐藏商品价格，如果不想隐藏价格，请把这一段删除即可
    add_filter( 'woocommerce_get_price_html', 'woocommerce_remove_price');
    function woocommerce_remove_price($price){    
        return ;
    }
   ```
   - 增强运费设置：**Flexible Shipping**
   - 增强折扣设置：**Discount Rules Core**