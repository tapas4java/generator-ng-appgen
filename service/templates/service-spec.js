(function(){
    'use strict';

    /**
     * This is a sample service spec
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    describe('<%= _.camelize(name) %>', function() {

        var service;

        beforeEach(function(){
            module('<%= appname %>');

            inject(function(<%= _.camelize(name) %>){
                service = <%= _.camelize(name) %>;
            });
        });

        it('should ...', function() {

            //TODO: Implement your service spec logic here
            //expect(service.doSomething()).toEqual('something');

        });

    });

})();
