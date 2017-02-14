var TaxSettings,bind=function(t,e){return function(){return t.apply(e,arguments)}};TaxSettings=function(){function t(t){this.params=t,this.updateDefaultStateField=bind(this.updateDefaultStateField,this),this.updateStateField=bind(this.updateStateField,this),this.addNewRule=bind(this.addNewRule,this),this.addNewClass=bind(this.addNewClass,this),jQuery("#add-tax-class").on("click",this.addNewClass),jQuery("#tax-classes").on("click","button.remove-tax-class",this.removeItem),jQuery("#add-tax-rule").on("click",this.addNewRule),jQuery("#tax-rules").on("click","button.remove-tax-rule",this.removeItem).on("change","select.tax-rule-country",this.updateStateField),jQuery("select#default_country").on("change",this.updateDefaultStateField),this.updateFields()}return t.prototype.params={new_class:"",new_rule:""},t.prototype.removeItem=function(){return jQuery(this).closest("tr").remove(),!1},t.prototype.addNewClass=function(){return jQuery("#tax-classes").append(this.params.new_class),!1},t.prototype.addNewRule=function(){var t;return t=jQuery(this.params.new_rule),jQuery("input.tax-rule-postcodes",t).select2({tags:[],tokenSeparators:[","],multiple:!0,formatNoMatches:""}),jQuery("#tax-rules").append(t),!1},t.prototype.updateStateField=function(t){var e,a,s,r;return a=jQuery(t.target).closest("tr"),s=jQuery("input.tax-rule-states",a),e=jQuery("select.tax-rule-country",a),r=e.val(),null!=this.params.states[r]?this._attachSelectField(s,this.params.states[r]):this._attachTextField(s)},t.prototype.updateDefaultStateField=function(t){var e,a;return e=jQuery("select#default_state"),a=jQuery("slelect#default_country").val(),null!=this.params.states[a]?this._attachSelectField(e,this.params.states[a]):this._attachTextField(e)},t.prototype.updateFields=function(){return jQuery("select.tax-rule-country").change(),jQuery("input.tax-rule-postcodes").select2({tags:[],tokenSeparators:[","],multiple:!0,formatNoMatches:""})},t.prototype._attachSelectField=function(t,e){return t.select2({data:e,multiple:!0,initSelection:function(t,a){var s,r,u,n,i,l,o;for(s=[],n=t.val().split(","),r=0,u=n.length;u>r;r++)o=n[r],l=function(){var t,a,s;for(s=[],t=0,a=e.length;a>t;t++)i=e[t],i.id===o&&s.push(i);return s}(),s.push(l[0]);return a(s)}})},t.prototype._attachTextField=function(t){return t.select2("destroy")},t}(),jQuery(function(){return new TaxSettings(jigoshop_admin_taxes)});