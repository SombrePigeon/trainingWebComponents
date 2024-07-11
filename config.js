export default 
{ 
    
    template: 
    {
        cached: false
        //use request object instead
    },
    style:
    {
        global: "/css/style.css",
        route: "/css/route.css"
    },
    content:
    {
        //use request object
    },
    route:
    {
        useShadow: true,
        shadowRootInit: 
        {
            mode: "open"
        },
        localNav: true,
        staticRouting: true,
        propagateStaticRouting: undefined
    },
    targetNavigation:
    {
        origins:[],
        targets:[],
        timeout: 10//ms
    }

}