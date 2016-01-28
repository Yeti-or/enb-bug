var FileProvideTech = require('enb/techs/file-provider'),
    bemTechs = require('enb-bem-techs'),
    cssTech = require('enb/techs/css'),
    jsTech = require('enb/techs/js');

module.exports = function(config) {
    config.node('pages/stripe', function(node) {
        node.addTechs([
            [FileProvideTech, { target: '?.bemdecl.js' }],
            [FileProvideTech, { target: '?.tmpl' }],
            [bemTechs.levels, { levels: [
                'blocks'
            ] }],
            [bemTechs.deps],
            [bemTechs.files],
            [cssTech],
            [jsTech]
        ]);

        node.addTargets(['?.css', '?.js']);
    });
};
