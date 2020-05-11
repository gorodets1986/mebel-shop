Vue.component('reviews', {
    data: function () {
        return {
            reviews: [
                {
                    image: 'source/sass/blocks/main-reviews/crazy-years.jpg',
                    title: '«Шальные годы» Монпарнаса',
                    description: 'В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»'
                },
                {
                    image: 'source/sass/blocks/main-reviews/anatomy.png',
                    title: 'Анатомия за 30 секунд',
                    description: 'Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно‑популярной литературе заметно вырос'
                },
                {
                    image: 'source/sass/blocks/main-reviews/spherical-eccentrics.jpg',
                    title: 'Сферические чудаки',
                    description: 'Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»'
                }
            ],
        }
    },
    template: `<ul class="main-reviews__list">
                    <li class="main-reviews__item" v-for="review in reviews">
                    <a href="#" class="main__reviews__link">
                        <img :src="review.image" :alt="review.title" class="main-reviews__image">
                        <h2 class="main-reviews__title">{{ review.title }}</h2>
                        <p class="main-reviews__description">{{ review.description }}</p>
                   </a>
               </li>
            </ul>`
});

Vue.component('tickets', {
    data: function () {
        return {
            tickets: [
                {
                    title: 'Скидка 50% на весь сезон 2020',
                    description: 'Покупая абонемент на сезон 2020 года вы сэкономите половину стоимости всех спектаклей'
                },
                {
                    title: 'Места у сцены',
                    description: 'Только для обладателей абонементов будет возможность сесть поближе к сцене'
                },
                {
                    title: 'Автограф-сессия актёров',
                    description: 'После спектаклей у вас будет возможность пообщаться с актёрами и взять у них автограф'
                }
            ],
        }
    },
    template: `<ul class="tickets__list">
                        <li class="tickets__item" v-for="ticket in tickets">
                            <a href="#" class="tickets__link">
                                <p class="tickets__link--title">{{ ticket.title }}</p>
                                <p class="tickets__link--description">{{ ticket.description }}</p>
                            </a>
                        </li>
                    </ul>`
});

Vue.component('contacts', {
    data: function () {
        return {
            contacts: [
                {
                    image: 'source/sass/blocks/contacts/instagram.svg',
                    name: 'Инстаграм',
                },
                {
                    image: 'source/sass/blocks/contacts/facebook.svg',
                    name: 'Фейсбук',
                },
                {
                    image: 'source/sass/blocks/contacts/twitter.svg',
                    name: 'Твиттер',
                }
            ],
        }
    },
    template: `<ul class="contacts__list">
                        <li class="contacts__item" v-for="contact in contacts">
                            <a href="#" class="contacts__link"><img :src="contact.image" :alt="contact.name" class="contacts__image"></a>
                        </li>
                    </ul>`
});

Vue.component('navigations-header', {
    props: ['navigations'],
    template: `<ul class="nav-main__list">
                        <li v-for="navigation in navigations" class="nav-main__item">
                            <a href="#" class="nav-main__link">{{ navigation }}</a>
                        </li>
                    </ul>`
});

Vue.component('navigations-footer', {
    props: ['navigations'],
    template: `<ul class="nav-main__list">
                        <li v-for="navigation in navigations" class="nav-main__item">
                            <a href="#" class="nav-main__link nav-main__link--footer">{{ navigation }}</a>
                        </li>
                    </ul>`
});

const app = new Vue({
    el: '#app',
    data: {
        titleSite: 'Новости культуры',
        ticketsHeading: 'Абонементы в театр',
        ticketsWatch: 'Смотреть',
        navigations: [
            'Новости', 'Обзоры', 'Музыка', 'Архитектура', 'Кино', 'Театр', 'Литература', 'Религия', 'Живопись'
        ]
    }
});
