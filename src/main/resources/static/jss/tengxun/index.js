$(function () {
    let pageIndex = 1;

    Vue.use(VueLazyload, {
        error: '/images/bg.gif',
        loading: '/images/bg.gif'
    });

    let rooter = new Vue({
        el: "#rooter",
        data() {
            return {
                currentChannel: "tv",
                tv: null,
                movie: null,
                variety: null,
                anime: null,
                child: null,
                documentary: null,
                life: null,
                funny: null,
                education: null,
                examination: null,
                news: null,
                technology: null,
                pageIndex: pageIndex,
                pageSize: 30,
                feature: -1,
                iarea: -1,
                pay: -1,
                sort: -1,
                year: -1,
                charge: -1,
                itype: -1,
                characteristic: -1,
                ipay: -1,
                iyear: -1,
                source: 1,
                exclusive: 1,
                plot_aspect: -1,
                language: -1,
                anime_status: -1,
                itrailer: -1,
                cuisine_style: -1,
                food_itype: 2887,
                iaspect: -1,
                icolumn: -1,
                icelebrity: -1,
                category: -1,
                time: -1,
                class_type: -1,
                column: -1,
                icompany: -1,
                tvFeature: null,
                tvFeatureCurrentIndex: 1,
                tvSort: null,
                tvSortCurrentIndex: 1,
                tvYear: null,
                tvYearCurrentIndex: 1,
                tvIarea: null,
                tvIareaCurrentIndex: 1,
                tvPay: null,
                tvPayCurrentIndex: 1,
                movieItype: null,
                movieItypeCurrentIndex: 1,
                movieIarea: null,
                movieIareaCurrentIndex: 1,
                movieSort: null,
                movieSortCurrentIndex: 1,
                movieYear: null,
                movieYearCurrentIndex: 1,
                movieCharge: null,
                movieChargeCurrentIndex: 1,
                movieCharacteristic: null,
                movieCharacteristicCurrentIndex: 1,
                varietySort: null,
                varietySortCurrentIndex: 1,
                varietyItype: null,
                varietyItypeCurrentIndex: 1,
                varietyExclusive: null,
                varietyExclusiveCurrentIndex: 1,
                varietyIarea: null,
                varietyIareaCurrentIndex: 1,
                varietyIyear: null,
                varietyIyearCurrentIndex: 1,
                varietyIpay: null,
                varietyIpayCurrentIndex: 1,
                animeSort: null,
                animeSortCurrentIndex: 1,
                animeIarea: null,
                animeIareaCurrentIndex: 1,
                animeItype: null,
                animeItypeCurrentIndex: 1,
                animePlot_aspect: null,
                animePlot_aspectCurrentIndex: 1,
                animeLanguage: null,
                animeLanguageCurrentIndex: 1,
                animeIyear: null,
                animeIyearCurrentIndex: 1,
                animeIpay: null,
                animeIpayCurrentIndex: 1,
                animeAnime_status: null,
                animeAnime_statusCurrentIndex: 1,
                childSort: null,
                childSortCurrentIndex: 1,
                childIarea: null,
                childIareaCurrentIndex: 1,
                childIyear: null,
                childIyearCurrentIndex: 1,
                childGender: null,
                childGenderCurrentIndex: 1,
                childIpay: null,
                childIpayCurrentIndex: 1,
                documentaryItype: null,
                documentaryItypeCurrentIndex: 1,
                documentarySort: null,
                documentarySortCurrentIndex: 1,
                documentaryItrailer: null,
                documentaryItrailerCurrentIndex: 1,
                documentaryPay: null,
                documentaryPayCurrentIndex: 1,
                lifeItype: null,
                lifeItypeCurrentIndex: 1,
                lifeSort: null,
                lifeSortCurrentIndex: 1,
                lifeCuisine_style: null,
                lifeCuisine_styleCurrentIndex: 1,
                lifeFood_itype: null,
                lifeFood_itypeCurrentIndex: 1,
                funnySort: null,
                funnySortCurrentIndex: 1,
                funnyItype: null,
                funnyItypeCurrentIndex: 1,
                funnyIaspect: null,
                funnyIaspectCurrentIndex: 1,
                funnyIcolumn: null,
                funnyIcolumnCurrentIndex: 1,
                funnyIcelebrity: null,
                funnyIcelebrityCurrentIndex: 1,
                educationSort: null,
                educationSortCurrentIndex: 1,
                educationCategory: null,
                educationCategoryCurrentIndex: 1,
                examinationSort: null,
                examinationSortCurrentIndex: 1,
                examinationClass_type: null,
                examinationClass_typeCurrentIndex: 1,
                examinationTime: null,
                examinationTimeCurrentIndex: 1,
                examinationCategory: null,
                examinationCategoryCurrentIndex: 1,
                newsSort: null,
                newsSortCurrentIndex: 1,
                newsItype: null,
                newsItypeCurrentIndex: 1,
                newsColumn: null,
                newsColumnCurrentIndex: 1,
                technologySort: null,
                technologySortCurrentIndex: 1,
                technologyItype: null,
                technologyItypeCurrentIndex: 1,
                technologyIcompany: null,
                technologyIcompanyCurrentIndex: 1,
                technologyIcelebrity: null,
                technologyIcelebrityCurrentIndex: 1,
                technologyIcolumn: null,
                technologyIcolumnCurrentIndex: 1,
                videoList: null
            };
        },
        created() {
            readTvConfig();
        }
    });


    rooter.$watch("tv", function () {
        rooter.currentChannel = "tv";
        commonAjax();

        let tvFeatureLis = $("ul.tv-feature li");
        tvFeatureLis.unbind().click(function () {
            rooter.currentChannel = "tv";
            rooter.pageIndex = 1;
            rooter.feature = $(this).find("span").attr("feature");
            tvFeatureLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let tvSortLis = $("ul.tv-sort li");
        tvSortLis.unbind().click(function () {
            rooter.currentChannel = "tv";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            tvSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let tvYearLis = $("ul.tv-year li");
        tvYearLis.unbind().click(function () {
            rooter.currentChannel = "tv";
            rooter.pageIndex = 1;
            rooter.year = $(this).find("span").attr("year");
            tvYearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let tvIareaLis = $("ul.tv-iarea li");
        tvIareaLis.unbind().click(function () {
            rooter.currentChannel = "tv";
            rooter.pageIndex = 1;
            rooter.iarea = $(this).find("span").attr("iarea");
            tvIareaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let tvPayLis = $("ul.tv-pay li");
        tvPayLis.unbind().click(function () {
            rooter.currentChannel = "tv";
            rooter.pageIndex = 1;
            rooter.pay = $(this).find("span").attr("pay");
            tvPayLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });


    rooter.$watch("movie", function () {
        rooter.currentChannel = "movie";
        commonAjax();

        let movieSortLis = $("ul.movie-sort li");
        movieSortLis.unbind().click(function () {
            rooter.currentChannel = "movie";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            movieSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let movieIareaLis = $("ul.movie-iarea li");
        movieIareaLis.unbind().click(function () {
            rooter.currentChannel = "movie";
            rooter.pageIndex = 1;
            rooter.iarea = $(this).find("span").attr("iarea");
            movieIareaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let movieCharacteristicLis = $("ul.movie-characteristic li");
        movieCharacteristicLis.unbind().click(function () {
            rooter.currentChannel = "movie";
            rooter.pageIndex = 1;
            rooter.characteristic = $(this).find("span").attr("characteristic");
            movieCharacteristicLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let movieYearLis = $("ul.movie-year li");
        movieYearLis.unbind().click(function () {
            rooter.currentChannel = "movie";
            rooter.pageIndex = 1;
            rooter.year = $(this).find("span").attr("year");
            movieYearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let movieChargeLis = $("ul.movie-charge li");
        movieChargeLis.unbind().click(function () {
            rooter.currentChannel = "movie";
            rooter.pageIndex = 1;
            rooter.charge = $(this).find("span").attr("charge");
            movieChargeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });


    rooter.$watch("variety", function () {
        rooter.currentChannel = "variety";
        commonAjax();

        let varietySortLis = $("ul.variety-sort li");
        varietySortLis.unbind().click(function () {
            rooter.currentChannel = "variety";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            varietySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let varietyExclusiveLis = $("ul.variety-exclusive li");
        varietyExclusiveLis.unbind().click(function () {
            rooter.currentChannel = "variety";
            rooter.pageIndex = 1;
            rooter.exclusive = $(this).find("span").attr("exclusive");
            varietyExclusiveLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let varietyIareaLis = $("ul.variety-iarea li");
        varietyIareaLis.unbind().click(function () {
            rooter.currentChannel = "variety";
            rooter.pageIndex = 1;
            rooter.iarea = $(this).find("span").attr("iarea");
            varietyIareaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let varietyIyearLis = $("ul.variety-iyear li");
        varietyIyearLis.unbind().click(function () {
            rooter.currentChannel = "variety";
            rooter.pageIndex = 1;
            rooter.iyear = $(this).find("span").attr("iyear");
            varietyIyearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let varietyIpayLis = $("ul.variety-ipay li");
        varietyIpayLis.unbind().click(function () {
            rooter.currentChannel = "variety";
            rooter.pageIndex = 1;
            rooter.ipay = $(this).find("span").attr("ipay");
            varietyIpayLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

    });


    rooter.$watch("anime", function () {
        rooter.currentChannel = "cartoon";
        commonAjax();

        let animeSortLis = $("ul.anime-sort li");
        animeSortLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            animeSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let animeIareaLis = $("ul.anime-iarea li");
        animeIareaLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.iarea = $(this).find("span").attr("iarea");
            animeIareaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let animeItypeLis = $("ul.anime-itype li");
        animeItypeLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.itype = $(this).find("span").attr("itype");
            animeItypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let animePlot_aspectLis = $("ul.anime-plot_aspect li");
        animePlot_aspectLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.plot_aspect = $(this).find("span").attr("plot_aspect");
            animePlot_aspectLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let animeLanguageLis = $("ul.anime-language li");
        animeLanguageLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.language = $(this).find("span").attr("language");
            animeLanguageLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let animeIyearLis = $("ul.anime-iyear li");
        animeIyearLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.iyear = $(this).find("span").attr("iyear");
            animeIyearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let animeIpayLis = $("ul.anime-ipay li");
        animeIpayLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.ipay = $(this).find("span").attr("ipay");
            animeIpayLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let animeAnime_statusLis = $("ul.anime-anime_status li");
        animeAnime_statusLis.unbind().click(function () {
            rooter.currentChannel = "cartoon";
            rooter.pageIndex = 1;
            rooter.anime_status = $(this).find("span").attr("anime_status");
            animeAnime_statusLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });

    rooter.$watch("child", function () {
        rooter.currentChannel = "child";
        commonAjax();

        let childSortLis = $("ul.child-sort li");
        childSortLis.unbind().click(function () {
            rooter.currentChannel = "child";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            childSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let childIareaLis = $("ul.child-iarea li");
        childIareaLis.unbind().click(function () {
            rooter.currentChannel = "child";
            rooter.pageIndex = 1;
            rooter.iarea = $(this).find("span").attr("iarea");
            childIareaLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let childIyearLis = $("ul.child-iyear li");
        childIyearLis.unbind().click(function () {
            rooter.currentChannel = "child";
            rooter.pageIndex = 1;
            rooter.iyear = $(this).find("span").attr("iyear");
            childIyearLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let childGenderLis = $("ul.child-gender li");
        childGenderLis.unbind().click(function () {
            rooter.currentChannel = "child";
            rooter.pageIndex = 1;
            rooter.gender = $(this).find("span").attr("gender");
            childGenderLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });


        let childIpayLis = $("ul.child-ipay li");
        childIpayLis.unbind().click(function () {
            rooter.currentChannel = "child";
            rooter.pageIndex = 1;
            rooter.ipay = $(this).find("span").attr("ipay");
            childIpayLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

    });


    rooter.$watch("documentary", function () {
        rooter.currentChannel = "doco";
        commonAjax();

        let documentaryItypeLis = $("ul.documentary-itype li");
        documentaryItypeLis.unbind().click(function () {
            rooter.currentChannel = "doco";
            rooter.pageIndex = 1;
            rooter.itype = $(this).find("span").attr("itype");
            documentaryItypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let documentarySortLis = $("ul.documentary-sort li");
        documentarySortLis.unbind().click(function () {
            rooter.currentChannel = "doco";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            documentarySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let documentaryItrailerLis = $("ul.documentary-itrailer li");
        documentaryItrailerLis.unbind().click(function () {
            rooter.currentChannel = "doco";
            rooter.pageIndex = 1;
            rooter.itrailer = $(this).find("span").attr("itrailer");
            documentaryItrailerLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let documentaryPayLis = $("ul.documentary-pay li");
        documentaryPayLis.unbind().click(function () {
            rooter.currentChannel = "doco";
            rooter.pageIndex = 1;
            rooter.pay = $(this).find("span").attr("pay");
            documentaryPayLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });

    rooter.$watch("life", function () {
        rooter.currentChannel = "life";
        commonAjax();

        let lifeItypeLis = $("ul.life-itype li");
        lifeItypeLis.unbind().click(function () {
            rooter.currentChannel = "life";
            rooter.pageIndex = 1;
            rooter.itype = $(this).find("span").attr("itype");
            lifeItypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let lifeSortLis = $("ul.life-sort li");
        lifeSortLis.unbind().click(function () {
            rooter.currentChannel = "life";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            lifeSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let lifeCuisine_styleLis = $("ul.life-cuisine_style li");
        lifeCuisine_styleLis.unbind().click(function () {
            rooter.currentChannel = "life";
            rooter.pageIndex = 1;
            rooter.cuisine_style = $(this).find("span").attr("cuisine_style");
            lifeCuisine_styleLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let lifeFood_itypeLis = $("ul.life-food_itype li");
        lifeFood_itypeLis.unbind().click(function () {
            rooter.currentChannel = "life";
            rooter.pageIndex = 1;
            rooter.food_itype = $(this).find("span").attr("food_itype");
            lifeFood_itypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

    });

    rooter.$watch("funny", function () {
        rooter.currentChannel = "fun";
        commonAjax();

        let funnySortLis = $("ul.funny-sort li");
        funnySortLis.unbind().click(function () {
            rooter.currentChannel = "fun";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            funnySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let funnyItypeLis = $("ul.funny-itype li");
        funnyItypeLis.unbind().click(function () {
            rooter.currentChannel = "fun";
            rooter.pageIndex = 1;
            rooter.itype = $(this).find("span").attr("itype");
            funnyItypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let funnyIaspectLis = $("ul.funny-iaspect li");
        funnyIaspectLis.unbind().click(function () {
            rooter.currentChannel = "fun";
            rooter.pageIndex = 1;
            rooter.iaspect = $(this).find("span").attr("iaspect");
            funnyIaspectLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let funnyIcolumnLis = $("ul.funny-icolumn li");
        funnyIcolumnLis.unbind().click(function () {
            rooter.currentChannel = "fun";
            rooter.pageIndex = 1;
            rooter.icolumn = $(this).find("span").attr("icolumn");
            funnyIcolumnLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let funnyIcelebrityLis = $("ul.funny-icelebrity li");
        funnyIcelebrityLis.unbind().click(function () {
            rooter.currentChannel = "fun";
            rooter.pageIndex = 1;
            rooter.icelebrity = $(this).find("span").attr("icelebrity");
            funnyIcelebrityLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });


    rooter.$watch("education", function () {
        rooter.currentChannel = "education";
        commonAjax();

        let educationSortLis = $("ul.education-sort li");
        educationSortLis.unbind().click(function () {
            rooter.currentChannel = "education";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            educationSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let educationCategoryLis = $("ul.education-category li");
        educationCategoryLis.unbind().click(function () {
            rooter.currentChannel = "education";
            rooter.pageIndex = 1;
            rooter.category = $(this).find("span").attr("category");
            educationCategoryLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });

    rooter.$watch("examination", function () {
        rooter.currentChannel = "gaokao";
        commonAjax();

        let examinationSortLis = $("ul.examination-sort li");
        examinationSortLis.unbind().click(function () {
            rooter.currentChannel = "gaokao";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            examinationSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let examinationClass_typeLis = $("ul.examination-class_type li");
        examinationClass_typeLis.unbind().click(function () {
            rooter.currentChannel = "gaokao";
            rooter.pageIndex = 1;
            rooter.class_type = $(this).find("span").attr("class_type");
            examinationClass_typeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let examinationTimeLis = $("ul.examination-time li");
        examinationTimeLis.unbind().click(function () {
            rooter.currentChannel = "gaokao";
            rooter.pageIndex = 1;
            rooter.time = $(this).find("span").attr("time");
            examinationTimeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let examinationCategoryLis = $("ul.examination-category li");
        examinationCategoryLis.unbind().click(function () {
            rooter.currentChannel = "gaokao";
            rooter.pageIndex = 1;
            rooter.category = $(this).find("span").attr("category");
            examinationCategoryLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });


    rooter.$watch("news", function () {
        rooter.currentChannel = "news";
        commonAjax();

        let newsSortLis = $("ul.news-sort li");
        newsSortLis.unbind().click(function () {
            rooter.currentChannel = "news";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            newsSortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let newsItypeLis = $("ul.news-itype li");
        newsItypeLis.unbind().click(function () {
            rooter.currentChannel = "news";
            rooter.pageIndex = 1;
            rooter.itype = $(this).find("span").attr("itype");
            newsItypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let newsColumnLis = $("ul.news-column li");
        newsColumnLis.unbind().click(function () {
            rooter.currentChannel = "news";
            rooter.pageIndex = 1;
            rooter.column = $(this).find("span").attr("column");
            newsColumnLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });


    rooter.$watch("technology", function () {
        rooter.currentChannel = "tech";
        commonAjax();

        let technologySortLis = $("ul.technology-sort li");
        technologySortLis.unbind().click(function () {
            rooter.currentChannel = "tech";
            rooter.pageIndex = 1;
            rooter.sort = $(this).find("span").attr("sort");
            technologySortLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let technologyItypeLis = $("ul.technology-itype li");
        technologyItypeLis.unbind().click(function () {
            rooter.currentChannel = "tech";
            rooter.pageIndex = 1;
            rooter.itype = $(this).find("span").attr("itype");
            technologyItypeLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let technologyIcompanyLis = $("ul.technology-icompany li");
        technologyIcompanyLis.unbind().click(function () {
            rooter.currentChannel = "tech";
            rooter.pageIndex = 1;
            rooter.icompany = $(this).find("span").attr("icompany");
            technologyIcompanyLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let technologyIcelebrityLis = $("ul.technology-icelebrity li");
        technologyIcelebrityLis.unbind().click(function () {
            rooter.currentChannel = "tech";
            rooter.pageIndex = 1;
            rooter.icelebrity = $(this).find("span").attr("icelebrity");
            technologyIcelebrityLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });

        let technologyIcolumnLis = $("ul.technology-icolumn li");
        technologyIcolumnLis.unbind().click(function () {
            rooter.currentChannel = "tech";
            rooter.pageIndex = 1;
            rooter.icolumn = $(this).find("span").attr("icolumn");
            technologyIcolumnLis.removeClass("focus");
            $(this).addClass("focus");
            commonAjax();
        });
    });

    function commonAjax() {
        $.ajax({
            type: "GET",
            url: "/tengxun/pageList?channel=" + rooter.currentChannel + "&pageIndex=" + rooter.pageIndex + "&pageSize=" + rooter.pageSize + "&feature=" + rooter.feature + "&iarea=" + rooter.iarea + "&listpage=2&pay=" + rooter.pay + "&sort=" + rooter.sort + "&year=" + rooter.year + "&charge=" + rooter.charge + "&itype=" + rooter.itype + "&characteristic=" + rooter.characteristic + "&ipay=" + rooter.ipay + "&iyear=" + rooter.iyear + "&source=" + rooter.source + "&exclusive=" + rooter.exclusive + "&plot_aspect=" + rooter.plot_aspect + "&language=" + rooter.language + "&anime_status=" + rooter.anime_status + "&itrailer=" + rooter.itrailer + "&cuisine_style=" + rooter.cuisine_style + "&food_itype=" + rooter.food_itype + "&iaspect=" + rooter.iaspect + "&icolumn=" + rooter.icolumn + "&icelebrity=" + rooter.icelebrity + "&category=" + rooter.category + "&time=" + rooter.time + "&class_type=" + rooter.class_type + "&column=" + rooter.column + "&icompany=" + rooter.icompany,
            dataType: "json",
            success: function (data) {
                rooter.videoList = data;
            }
        });
    }

    let flag = true;

    $(window).scroll(function () {
        if ($(document).scrollTop() >= ($(document).height() - $(window).height()) * 0.95) {
            if (flag) {
                flag = false;
                rooter.pageIndex++;
                $.ajax({
                    type: "GET",
                    url: "/tengxun/pageList?channel=" + rooter.currentChannel + "&pageIndex=" + rooter.pageIndex + "&pageSize=" + rooter.pageSize + "&feature=" + rooter.feature + "&iarea=" + rooter.iarea + "&listpage=2&pay=" + rooter.pay + "&sort=" + rooter.sort + "&year=" + rooter.year + "&charge=" + rooter.charge + "&itype=" + rooter.itype + "&characteristic=" + rooter.characteristic + "&ipay=" + rooter.ipay + "&iyear=" + rooter.iyear + "&source=" + rooter.source + "&exclusive=" + rooter.exclusive + "&plot_aspect=" + rooter.plot_aspect + "&language=" + rooter.language + "&anime_status=" + rooter.anime_status + "&itrailer=" + rooter.itrailer + "&cuisine_style=" + rooter.cuisine_style + "&food_itype=" + rooter.food_itype + "&iaspect=" + rooter.iaspect + "&icolumn=" + rooter.icolumn + "&icelebrity=" + rooter.icelebrity + "&category=" + rooter.category + "&time=" + rooter.time + "&class_type=" + rooter.class_type + "&column=" + rooter.column + "&icompany=" + rooter.icompany,
                    dataType: "json",
                    success: function (data) {
                        let videoList = data;
                        for (let i = 0; i < videoList.length; i++) {
                            rooter.videoList.push(videoList[i]);
                        }
                        flag = true;
                    }
                });
            }
        }
    });

    /**
     * 处理channel的切换
     */
    let channelLis = $("#rooter ul.main li");
    channelLis.unbind().click(function () {
        let channelString = $(this).text();
        switch (channelString) {
            case "电视剧":
                rooter.currentChannel = "tv";
                readTvConfig();
                break;
            case "电影":
                rooter.currentChannel = "movie";
                readMovieConfig();
                break;
            case "综艺":
                rooter.currentChannel = "variety";
                readVarietyConfig();
                break;
            case "动漫":
                rooter.currentChannel = "cartoon";
                readAnimeConfig();
                break;
            case "少儿":
                rooter.currentChannel = "child";
                readChildConfig();
                break;
            case "纪录片":
                rooter.currentChannel = "doco";
                readDocumentaryConfig();
                break;
            case "生活":
                rooter.currentChannel = "life";
                readLifeConfig();
                break;
            case "搞笑":
                rooter.currentChannel = "fun";
                readFunnyConfig();
                break;
            case "教育":
                rooter.currentChannel = "education";
                readEducationConfig();
                break;
            case "高考":
                rooter.currentChannel = "gaokao";
                readExaminationConfig();
                break;
            case "新闻":
                rooter.currentChannel = "news";
                readNewsConfig();
                break;
            case "科技":
                rooter.currentChannel = "tech";
                readTechnologyConfig();
                break;
            default:
                break;
        }
        commonAjax();
        channelLis.removeClass("focus");
        $(this).addClass("focus");
    });

    function readTvConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/tv.json",
            dataType: "json",
            success: function (data) {
                rooter.tv = data;
                rooter.tvFeature = data["类型|feature"];
                rooter.tvSort = data["排序|sort"];
                rooter.tvYear = data["年份|year"];
                rooter.tvIarea = data["地区|iarea"];
                rooter.tvPay = data["资费|pay"];
                commonAjax();
            }
        });
    }

    function readMovieConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/movie.json",
            dataType: "json",
            success: function (data) {
                rooter.movie = data;
                rooter.movieItype = data["类型|itype"];
                rooter.movieIarea = data["地区|iarea"];
                rooter.movieSort = data["排序|sort"];
                rooter.movieYear = data["年份|year"];
                rooter.movieCharge = data["资费|charge"];
                rooter.movieCharacteristic = data["特色|characteristic"];
                commonAjax();
            }
        });
    }

    function readVarietyConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/variety.json",
            dataType: "json",
            success: function (data) {
                rooter.variety = data;
                rooter.varietyItype = data["类型|itype"];
                rooter.varietySort = data["排序|sort"];
                rooter.varietyExclusive = data["独家|exclusive"];
                rooter.varietyIarea = data["地区|iarea"];
                rooter.varietyIyear = data["年份|iyear"];
                rooter.varietyIpay = data["付费|ipay"];
                commonAjax();
            }
        });
    }

    function readAnimeConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/anime.json",
            dataType: "json",
            success: function (data) {
                rooter.anime = data;
                rooter.animeSort = data["排序|sort"];
                rooter.animeIarea = data["地区|iarea"];
                rooter.animeItype = data["类型|itype"];
                rooter.animePlot_aspect = data["看点|plot_aspect"];
                rooter.animeLanguage = data["语言|language"];
                rooter.animeIyear = data["时间|iyear"];
                rooter.animeIpay = data["资费|ipay"];
                rooter.animeAnime_status = data["状态|anime_status"];
                commonAjax();
            }
        });
    }


    function readChildConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/child.json",
            dataType: "json",
            success: function (data) {
                rooter.child = data;
                rooter.childSort = data["排序|sort"];
                rooter.childIarea = data["地区|iarea"];
                rooter.childIyear = data["年龄|iyear"];
                rooter.childGender = data["性别|gender"];
                rooter.childIpay = data["资费|ipay"];
                commonAjax();
            }
        });
    }

    function readDocumentaryConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/documentary.json",
            dataType: "json",
            success: function (data) {
                rooter.documentary = data;
                rooter.documentaryItype = data["类型|itype"];
                rooter.documentarySort = data["排序|sort"];
                rooter.documentaryItrailer = data["出品机构|itrailer"];
                rooter.documentaryPay = data["资费|pay"];
                commonAjax();
            }
        });
    }


    function readLifeConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/life.json",
            dataType: "json",
            success: function (data) {
                rooter.life = data;
                rooter.lifeItype = data["类型|itype"];
                rooter.lifeSort = data["排序|sort"];
                rooter.lifeCuisine_style = data["料理风格|cuisine_style"];
                rooter.lifeFood_itype = data["食物类型|food_itype"];
                commonAjax();
            }
        });
    }


    function readFunnyConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/funny.json",
            dataType: "json",
            success: function (data) {
                rooter.funny = data;
                rooter.funnySort = data["排序|sort"];
                rooter.funnyItype = data["类型|itype"];
                rooter.funnyIaspect = data["看点|iaspect"];
                rooter.funnyIcolumn = data["食栏目|icolumn"];
                rooter.funnyIcelebrity = data["名人|icelebrity"];
                commonAjax();
            }
        });
    }


    function readEducationConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/education.json",
            dataType: "json",
            success: function (data) {
                rooter.education = data;
                rooter.educationSort = data["排序|sort"];
                rooter.educationCategory = data["内容类型|category"];
                commonAjax();
            }
        });
    }

    function readExaminationConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/examination.json",
            dataType: "json",
            success: function (data) {
                rooter.examination = data;
                rooter.examinationSort = data["排序|sort"];
                rooter.examinationClass_type = data["类型|class_type"];
                rooter.examinationTime = data["类型|time"];
                rooter.examinationCategory = data["课程类别|category"];
                commonAjax();
            }
        });
    }

    function readNewsConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/news.json",
            dataType: "json",
            success: function (data) {
                rooter.news = data;
                rooter.newsSort = data["排序|sort"];
                rooter.newsItype = data["类型|itype"];
                rooter.newsColumn = data["新闻栏目|column"];
                commonAjax();
            }
        });
    }

    function readTechnologyConfig() {
        $.ajax({
            type: "GET",
            url: "/htmls/tengxun/technology.json",
            dataType: "json",
            success: function (data) {
                rooter.technology = data;
                rooter.technologySort = data["排序|sort"];
                rooter.technologyItype = data["类型|itype"];
                rooter.technologyIcompany = data["公司|icompany"];
                rooter.technologyIcelebrity = data["名人|icelebrity"];
                rooter.technologyIcolumn = data["栏目|icolumn"];
                commonAjax();
            }
        });
    }

    $("input").unbind().keyup(function (event) {
        if (event.keyCode === 13 && $(this).val() !== ""){
            $("a.searchButton").get(0).click();
        }
    });

    $("a.searchButton").unbind().click(function () {
        $(this).attr("href","/tengxun/searchPage/"+$("input").val());
    });
});