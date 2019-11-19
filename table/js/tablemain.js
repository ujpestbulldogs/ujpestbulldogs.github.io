import axios from 'axios'

(function ($) {
    "use strict";

        
    

})(jQuery);

created = () => {
    let data
    axios.get('https://bulldogs-offseason-2019.firebaseio.com/')
    .then(response => data = response)
    console.log(data)
  }
