var Shipping;Shipping=function(){function t(){this.ruleCount=jQuery("#advanced-flat-rate li.list-group-item").length,jQuery("div.advanced_flat_rate_countries_field").show(),jQuery("#advanced_flat_rate_available_for").on("change",this.toggleSpecificCountires),jQuery("#advanced-flat-rate").on("click",".add-rate",function(t){return function(e){return t.addRate(e)}}(this)),jQuery("#advanced-flat-rate").on("click",".toggle-rate",this.toggleRate),jQuery("#advanced-flat-rate").on("click",".remove-rate",this.removeRate),jQuery("#advanced-flat-rate").on("keyup",".input-label, .input-cost",this.updateTitle),jQuery("#advanced-flat-rate").on("change","select.country-select",this.updateStates)}return t.prototype.ruleCount=0,t.prototype.updateTitle=function(t){var e,a,r;return e=jQuery(t.target).closest("li"),r=e.find(".input-label").val(),a=e.find(".input-cost").val(),e.find("span.title").html(r+" - "+a)},t.prototype.updateStates=function(t){var e;return e=jQuery(t.target).val(),jQuery.ajax({url:jigoshop.getAjaxUrl(),type:"POST",dataType:"JSON",data:{action:"jigoshop.ajax",service:"jigoshop.ajax.get_states",country:e}}).done(function(e){var a,r,n;if(null!=e.success&&e.success){a=jQuery(t.target).closest("li").find("select.states-select"),a.find("option").remove();for(n in e.states)r=e.states[n],a.append(jQuery("<option></option>").attr("value",n).text(r));return a.select2()}})},t.prototype.addRate=function(t){var e;return t.preventDefault(),e=wp.template("advanced-flat-rate"),this.ruleCount++,jQuery("#advanced-flat-rate ul.list-group").append(e({id:this.ruleCount})),jQuery("#advanced-flat-rate ul.list-group li:last select").select2()},t.prototype.toggleSpecificCountires=function(t){return"specific"===jQuery(t.target).val()?jQuery("#advanced_flat_rate_countries").closest("tr").show():jQuery("#advanced_flat_rate_countries").closest("tr").hide()},t.prototype.toggleRate=function(t){var e;return e=jQuery(t.target),jQuery(".list-group-item-text",e.closest("li")).slideToggle(function(){return jQuery("span",e).toggleClass("glyphicon-collapse-down").toggleClass("glyphicon-collapse-up")})},t.prototype.removeRate=function(t){var e;return e=jQuery(t.target).closest("li"),e.slideUp(1e3,function(){return e.remove()})},t}(),jQuery(function(){return new Shipping});