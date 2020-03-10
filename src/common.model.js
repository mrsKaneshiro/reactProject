import BackBone, { Collection } from 'backbone';

var testBackBone = BackBone.Collection.extend({

    initialize: function() {
        console.log("model已被建立")
        this.trigger("success")
    },
    
  })

export default testBackBone