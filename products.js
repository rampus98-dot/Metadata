const form_to_items = {

    "form_kudu": {
        item_id: "KUDU001",
        item_name: "Kudukött",
        item_brand: "African Meats",
        item_category: "Kött",
        item_category2: "Afrikanskt",
        item_variant: "1 kg",
        price: 249
    },

    "form_water_buffalo": {
        item_id: "BUFFALO001",
        item_name: "Vattenbuffel",
        item_brand: "African Meats",
        item_category: "Kött",
        item_category2: "Afrikanskt",
        item_variant: "1 kg",
        price: 399
    },

    "form_ostrich": {
        item_id: "OSTRICH001",
        item_name: "Struts",
        item_brand: "African Meats",
        item_category: "Kött",
        item_category2: "Afrikanskt",
        item_variant: "1 kg",
        price: 449
    },

    "form_zebra": {
        item_id: "ZEBRA001",
        item_name: "Zebra",
        item_brand: "African Meats",
        item_category: "Kött",
        item_category2: "Afrikanskt",
        item_variant: "1 kg",
        price: 549
    },

    "form_snake": {
        item_id: "SNAKE001",
        item_name: "Orm",
        item_brand: "Asian Snake Farm",
        item_category: "Kött",
        item_category2: "Asiatiskt",
        item_variant: "1 kg",
        price: 299
    },

    "form_turtle": {
        item_id: "TURTLE001",
        item_name: "Sköldpadda",
        item_brand: "Asian Meats Express",
        item_category: "Kött",
        item_category2: "Asiatiskt",
        item_variant: "1 kg",
        price: 449
    },

    "form_yak": {
        item_id: "YAK001",
        item_name: "Yak",
        item_brand: "Asian Meats Express",
        item_category: "Kött",
        item_category2: "Asiatiskt",
        item_variant: "1 kg",
        price: 389
    },

    "form_skorpion": {
        item_id: "SKORPION001",
        item_name: "Skorpion",
        item_brand: "Asian Meats Express",
        item_category: "Kött",
        item_category2: "Asiatiskt",
        item_variant: "1 kg",
        price: 549
    },


    "form_buffel": {
        item_id: "buffel001",
        item_name: "Buffel",
        item_brand: "Oceanien Meats",
        item_category: "Kött",
        item_category2: "Oceanien",
        item_variant: "1 kg",
        price: 249
    },


    "form_crocodile": {
        item_id: "CROCODILE001",
        item_name: "Krokodil",
        item_brand: "Oceanien Meats",
        item_category: "Kött",
        item_category2: "Oceanien",
        item_variant: "1 kg",
        price: 359
    },

    "form_emu": {
        item_id: "EMU001",
        item_name: "Emu",
        item_brand: "Oceanien Meats",
        item_category: "Kött",
        item_category2: "Oceanien",
        item_variant: "1 kg",
        price: 539
    },

    "form_kangaroo": {
        item_id: "KANGAROO001",
        item_name: "Känguru",
        item_brand: "Oceanien Meats",
        item_category: "Kött",
        item_category2: "Oceanien",
        item_variant: "1 kg",
        price: 279
    },

    "form_kaiman": {
        item_id: "KAIMAN001",
        item_name: "Kaiman",
        item_brand: "South America Exotic Meat",
        item_category: "Kött",
        item_category2: "Sydamerika",
        item_variant: "1 kg",
        price: 369
    },

    "form_guinea_pig": {
        item_id: "GUINEAPIG001",
        item_name: "Marsvin",
        item_brand: "South America Exotic Meat",
        item_category: "Kött",
        item_category2: "Sydamerika",
        item_variant: "1 kg",
        price: 129
    },

    "form_llama": {
        item_id: "LLAMA001",
        item_name: "Lama",
        item_brand: "South America Exotic Meat",
        item_category: "Kött",
        item_category2: "Sydamerika",
        item_variant: "1 kg",
        price: 449
    },

    "form_alpaca": {
        item_id: "ALPACA001",
        item_name: "Alpacka",
        item_brand: "South America Exotic Meat",
        item_category: "Kött",
        item_category2: "Sydamerika",
        item_variant: "1 kg",
        price: 489
    },
}

function handle_purchase(event) {
    event.preventDefault()

    const form = event.target
    const item = form_to_items[form.name]

    const data = new FormData(form)

    const quantity = parseFloat(data.get("quantity"))

    if (item && quantity && quantity >= 0.5) {
        const purchase_item = {
            ...item,
            quantity: quantity
        }

        const ecommerce = {
            transaction_id: "T1",
            currency: "SEK",
            items: [purchase_item]
        }

        ecommerce.value = purchase_item.quantity * purchase_item.price

        dataLayer.push({ ecommerce: null })

        dataLayer.push({
            event: "purchase",
            ecommerce: ecommerce
        })
    }
}


for (const form of document.forms) {
    if (form.classList.contains("order-section")) {
        form.onsubmit = handle_purchase
    }
}
