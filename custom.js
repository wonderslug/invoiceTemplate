Handlebars.registerHelper('foobar', function () {
    return new Handlebars.SafeString(
         "FOOBAR DAMNIT!"
    );
});

Handlebars.registerPartial('foobarpartial', '<{{tagName}}>{{formatMessage (intlGet "messages.FOOBAR")}} FOO BAR PARTIAL</{{tagName}}>');