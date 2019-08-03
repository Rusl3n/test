
    var CustomWidget = function() {
        var self = this;
        this.callbacks = {
            render: function() {
                console.log('render');
                if ((AMOCRM.data.current_card != 'undefined'))
                    if (AMOCRM.data.current_card.id == 0)
                        return false;
                self.render_template({
                    caption: {
                        class_name: 'js-aci-capion',
                        html: ''
                    },
                    body: '',
                    render: '<div id="layer_check">' +
                        '<div  style="width: 100%;"><button  style="width: 100%;" class="button-input" id="tableLink1">Первичная квалификация</button></div>' +
                        '<div style="padding: 2px;"> </div>'+
                        '<div  style="width: 100%;"><button  style="width: 100%;" class="button-input" id="tableLink2">ТЗ на внедрение CRM Ч1</button></div>' +
                        '<div style="padding: 2px;"> </div>'+
                        '<div  style="width: 100%;"><button  style="width: 100%;" class="button-input" id="tableLink3">ТЗ на внедрение CRM Ч2</button></div>' +
                        '<div style="padding: 2px;"> </div>'+
                        '<div  style="width: 100%;"><button  style="width: 100%;" class="button-input" id="tableLink4">Тест на определение АТС</button></div>' +
                        '<div style="padding: 2px;"> </div>'+
                        '</div>'
                });
                return true;
            },
            init: function() {
                console.log('init');
                return true;
            },
            bind_actions: function() {
                
                return true;
            },
            settings: function() {
            	$('input[name="freeData"][class="widget_settings_block__controls__ text-input"]').hide();
            	$('input[name="freeData"][class="widget_settings_block__controls__ text-input"]').val("0");
            	$('#save_installcrm_sortcompanies').attr('class', 'button-input js-widget-save button-input_blue');
                return true;
            },
            onSave: function() {
                return true;
            },
            destroy: function() {},
            contacts: {
                //select contacts in list and clicked on widget name
                selected: function() {
                }
            },
            leads: {
                //select leads in list and clicked on widget name
                selected: function() {
                }
            },
            tasks: {
                //select taks in list and clicked on widget name
                selected: function() {
                }
            }
        };

        return this;
    };
//qwe
