import { createI18n } from 'vue-i18n'
import elementlangEn from 'element-plus/lib/locale/lang/en'
import elementlangZhCn from 'element-plus/lib/locale/lang/zh-cn'
import localeLangEn from './en'
import localeLangZhCn from './cn'

const messages = {
    'zh-cn': {
        ...localeLangZhCn,
        ...elementlangZhCn,
    },
    'en': {
        ...localeLangEn,
        ...elementlangEn,
    }
}

const i18n = createI18n({
  // locale: 'en',  
  locale: window.localStorage.getItem('lang') || 'zh-cn',
    messages
})

export default i18n