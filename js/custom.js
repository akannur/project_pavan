var products = ['ayurvedic-products', 'coconut-products', 'cooking-oil-and-ghee', 'dals-lentils-and-pulses', 'flours-products', 'nuts-and-dry-fruits', 'other-cereals-and-millets', 'processed-products', 'rice-products', 'sugar-confectioneries-and-salts', 'spice-whole-and-grounds'];

$(".products-dropdown").click(function() {
	var selectedProduct = (this).id
	if (selectedProduct != 'all-products') {
		$.each(products, function(index, product) {
			if (selectedProduct.slice(0,-3) != product) {
				$('#'+product).hide();
			}
			else {
				var name = product.replace(/\-/g, " ")
				$('#'+product).show();
				$("#selected-product").html(name+"&nbsp;<span class='caret'></span>")
			}
		})
	}
	else {
		$.each(products, function(index, product) {
			$('#'+product).show();
			$("#selected-product").html("All&nbsp;<span class='caret'></span>")
		})
	}
})

jQuery(document).ready(function() {
            function count($this){
                var current = parseInt($this.html(), 10);
                current = current + 1; /* Where 1 is increment */

                $this.html(++current);
                if(current > $this.data('count')){
                    $this.html($this.data('count'));
                } else {
                    setTimeout(function(){count($this)}, 50);
                }
            }

            jQuery(".stat-count").each(function() {
              jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
              jQuery(this).html('0');
              count(jQuery(this));
          });
        });


