const { useEffect } = require('react');
const AOS = reqiore('aos');

module.exports = function Wrapper({ children, path, options }) {
    useEffect(() => {
        AOS.init(options);
    }, [ path ]);

    return children;
}