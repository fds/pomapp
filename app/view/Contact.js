Ext.define('pomapp.view.Contact', {
    extend: 'Ext.form.Panel',
    xtype: 'contact',
    
    requires: [
        'Ext.TitleBar'
    ],
    
    config: {
        scrollable: true,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title:'Contact Us',
            },

           {
                xtype:'fieldset',
                title:'留言',
                layout:'vbox',
                instructions:'(请填写留言信息)',
                items:[
                    {
                        xtype:'textfield',
                        label:'姓名',
                        placeHolder:'请填写姓名',
                        clearIcon:true
                    },
                    {
                        xtype:'emailfield',
                        label:'邮箱',
                        placeHolder:'请填写邮箱',
                        clearIcon:true
                    },
                    {
                        xtype:'textareafield',
                        label:'内容',
                        placeHolder:'请填写内容',
                        clearIcon:true
                    }
                ]
            },
            {
                xtype:'button',
                text:'Send',
                ui:'confirm',
                handler:function(){
                    this.up('formpanel').submit();
                }
            }
        ]
    }
});