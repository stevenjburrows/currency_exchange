import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
    new Vue ({
        el: '#app',
        data: {
             convertionRates: {},
             amount: 0,
             selectedCurrency: "",
             converted: 0,
             exchangeWay: ""

        },
        mounted(){
            this.fetchConversionRates()
        },

        computed: {
            convertedAmount: function() {
                console.log(this.selectedCurrency);
                console.log(this.amount);
                console.log(this.exchangeWay);
                if (this.exchangeWay == "toEuro") {
                    this.converted = this.amount / this.selectedCurrency
                };
                if (this.exchangeWay == "fromEuro") {
                    this.converted = this.amount * this.selectedCurrency
                };
                
                
                
                console.log(this.converted);
                
                return this.converted.toFixed(2)
   //             return this.amount * this.selectedCurrency
            }

        },
        methods: {
            fetchConversionRates: function() {
                fetch('https://api.exchangeratesapi.io/latest')
                .then(response => response.json())
                .then( currency => this.convertionRates = currency)
                
                
            }
        }



    })
})