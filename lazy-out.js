/*

project: lazy-out.js
version: 1.0
doc: https://kurogedelic.github.io/lazy-out.js
repo: https://github.com/kurogedelic/lazy-out.js
license: MIT https://raw.githubusercontent.com/kurogedelic/lazy-out.js/master/LICENSE

notice: Request jQuery 3+

author: (amateur) Leo Kuroshita. 
website: https://teletakt.red/

*/

$(function () {

    // First Setup JSON
    var LazyOut = [{
            "lazySrc": "lazy-src",
            "originalSrc": "orig-file",
            "originalSize": "orig-size",
            "threshold": 300

    }],
        lazyClassNameSet = LazyOut[0].lazyClassName,
        exLazyClassNameSet = LazyOut[0].exLazyClassName,
        lazySrcSet = LazyOut[0].lazySrc,
        originalSrcSet = LazyOut[0].originalSrc,
        originalSizeSet = LazyOut[0].originalSize,
        thresholdSet = LazyOut[0].threshold;

    $('.lazy').each(function () {

        var lazyImgSrc = $(this).data(lazySrcSet);

        $(this).removeAttr('src');
        $(this).attr('src', lazyImgSrc);

        // Check Original-Size data attr.
        if ($(this).data(originalSizeSet)) {
            var origSize = $(this).data(originalSizeSet).split(',');

            // Set Original-Size to width/height attr.
            $(this).attr('width', origSize[0]);
            $(this).attr('height', origSize[1]);
        }
    });

    // Scroll function
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();


        $('.lazy').each(function () {
            var targetPosition = $(this).offset().top;

            // Check distance from pagetop.
            if (topWindow > targetPosition - windowHeight + thresholdSet) {
                var origImgSrc = $(this).data(originalSrcSet),
                    lazyImgSrc = $(this).data(lazySrcSet);

                // Insert Original-Image-URL to src attr.
                $(this).attr('src', origImgSrc);

                // Remove .lazy and Add .lazy-done.
                $(this).removeClass('lazy');
                $(this).addClass('lazy-done');
            }
        });
    });
});