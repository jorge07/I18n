import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    Router.route('/restful', {where: 'server'})
        .get(function() {
            this.response.setHeader('Content-Type', 'application/json');
            this.response.end(JSON.stringify({"vaya":123123}));
        })
    ;

    Router.route('/ping', {where: 'server'})
        .get(function() {
            this.response.setHeader('Content-Type', 'application/json');
            this.response.end("pong");
        })
    ;
});
