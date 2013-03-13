Ext.define("pomapp.view.Main", {
    extend: 'Ext.tab.Panel',
    id: 'mainview',
    xtype: 'appview',
    config: {
        tabBarPosition: 'bottom',
        ui:'dark',
        layout:{
            animation:{type:'slide',duration: 250}
        },

        defaults: {
            layout: 'fit'
        },
        
        items: [
            {
                id: 'home',
                title: '首页',
                iconCls: 'home',
                
                items: [
                    {
                        xtype: 'homepage'
                    }
                ]
            },
            
            {
                id: 'sections',
                title: '文章',
                iconCls: 'bookmarks',
                
                items: [
                    {
                        xtype: 'sectionslist'
                    }
                ]
            },{
                id: 'carousel',
                title: '图库',
                iconCls: 'team',
                badgeText:'new',
                items: [
                    {
                        xtype: 'pic',
                    }
                ]
            },{
                id: 'contact',
                title: '联系我们',
                iconCls: 'info',
                
                items: [
                    {
                        xtype: 'contact',
                    }
                ]
            }
        ]
    }
});
