<template>
    <v-expansion-panels>
        <v-expansion-panel
        v-for="(how ,i) in hows"
        :key="i"
        >
        <v-expansion-panel-header>
            {{ how.name | toUpper }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <div v-html="how.text"></div>
            <br>
            <video width="100%" controls>
                <source :src="how.mp4" type="video/mp4">
                <source :src="how.webm" type="video/webm">
            </video>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
export default {
    name: 'how-it-works',

    data() {
        return {
            hows: [
                {
                    name: 'Add Product',
                    mp4: '/videos/products/mp4/add-product.mp4',
                    webm: '/videos/products/webm/add-product.webm',
                    text: `
                    <ol>
                        <li>Click Create Product button or click Add </li>
                        <li>Type Product name</li>
                        <li>Type description of the product</li>
                        <li>Add image by clicking Add media</li>
                        <li>Add variant / option for type of Products, Camps and Others
                            <ul>
                                <li>Enter name</li>
                                <li>Set quantity of the variant</li>
                                <li>Set Price of the variant</li>
                                <li>Check / Uncheck visible. this option will display on product view page</li>
                            </ul>
                        </li>
                        <li>Set Related Uniforms (optional) </li>
                        <li>Set Related Lessons (optional) </li>
                        <li>Search Engine Optimizer (optional) </li>
                        <li>Select which type of product </li>
                        <li>Check categories </li>
                        <li>Status: Draft or Publish </li>
                        <li>Click Save Product </li>
                    </ol>
                    `,
                },
                {
                    name: 'Edit Product',
                    mp4: '/videos/products/mp4/edit-product.mp4',
                    webm: '/videos/products/webm/edit-product.webm',
                    text: `
                    <ol>
                        <li>Click product you want to edit </li>
                        <li>Type Product name</li>
                        <li>Type description of the product</li>
                        <li>Add image by clicking Add media</li>
                        <li>Add variant / option for type of Products, Camps and Others
                            <ul>
                                <li>Enter name</li>
                                <li>Set quantity of the variant</li>
                                <li>Set Price of the variant</li>
                                <li>Check / Uncheck visible. this option will display on product view page</li>
                            </ul>
                        </li>
                        <li>Set Related Uniforms (optional) </li>
                        <li>Set Related Lessons (optional) </li>
                        <li>Search Engine Optimizer (optional) </li>
                        <li>Select which type of product </li>
                        <li>Check categories </li>
                        <li>Status: Draft or Publish </li>
                        <li>Click Save Product </li>
                    </ol>
                    `,
                },
                {
                    name: 'Copy Product',
                    mp4: '/videos/products/mp4/copy-product.mp4',
                    webm: '/videos/products/webm/copy-product.webm',
                    text: `
                    <ol>
                        <li>Click copy product icon </li>
                        <li>Type Product name</li>
                        <li>Type description of the product</li>
                        <li>Add image by clicking Add media</li>
                        <li>Add variant / option for type of Products, Camps and Others
                            <ul>
                                <li>Enter name</li>
                                <li>Set quantity of the variant</li>
                                <li>Set Price of the variant</li>
                                <li>Check / Uncheck visible. this option will display on product view page</li>
                            </ul>
                        </li>
                        <li>Set Related Uniforms (optional) </li>
                        <li>Set Related Lessons (optional) </li>
                        <li>Search Engine Optimizer (optional) </li>
                        <li>Select which type of product </li>
                        <li>Check categories </li>
                        <li>Status: Draft or Publish </li>
                        <li>Click Save Product </li>
                    </ol>
                    `,
                },
                {
                    name: 'Export / Import Stocks',
                    mp4: '/videos/products/mp4/export-import-stocks.mp4',
                    webm: '/videos/products/webm/export-import-stocks.webm',
                    text: `
                    <ol>
                        <li>Click export product </li>
                        <li>Open the downloaded excel file </li>
                        <li>Edit the Price, Available stock(s) in POS, Available stock(s) in Actual, New Stock
                            <ul>
                                <li>Price; you can amend the price variant </li>
                                <li>Available stock(s) in POS; if you want to revert the changes from previous stocks, enter Available stock(s) in Actual and New stocks to 0</li>
                                <li>Available stock(s) in Actual; it will update the stock if the entered quantity > 0 </li>
                                <li>New Stock; increase the stocks </li>
                            </ul>
                        </li>
                        <li>Click save as then change the extension file from Web Page (*.htm, *.html) to Excel Workbook (*.xlsx) </li>
                        <li>Click import </li>
                        <li>Select the excel file you saved </li>
                        <li>Click upload </li>
                    </ol>
                    `,
                },
                {
                    name: 'Set Xero Account',
                    mp4: '/videos/products/mp4/set-xero-product.mp4',
                    webm: '/videos/products/webm/set-xero-product.webm',
                    text: `
                        <ol>
                            <li>Click cloud sync product icon </li>
                            <li>Select chart of accounts from xero import </li>
                            <li>Click save </li>
                        </ol>
                    `,
                }  
            ]
        }
    }
}
</script>