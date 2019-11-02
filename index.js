const observeEntry = config => {

    const defaults = {
        intersectingClass: 'is-intersected',
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }

    let options;

    if ( typeof config == 'string') {
        defaults.selector = config;
        options = { ...defaults };
    } else {
        if( !config.selector ) {
            throw '"Selector" key is required in options object.';
        }
        options = { ...defaults, ...config };
    }

    const els = document.querySelectorAll( options.selector );

    const callback = entries => {
        entries.forEach( entry => {
            if ( entry.isIntersecting ) {
                entry.target.classList.add( options.intersectingClass );
            }
        });
    }

    const observer = new IntersectionObserver( callback, options );

    [].forEach.call(els, el => observer.observe( el ));

    return observer;
}

export default observeEntry;
