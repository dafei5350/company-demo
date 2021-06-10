import { createI18n } from 'vue-i18n'
import elementlangEn from 'element-plus/lib/locale/lang/en'
import elementlangZhCn from 'element-plus/lib/locale/lang/zh-cn'
import elementlangAr from 'element-plus/lib/locale/lang/ar'
import elementlangJa from 'element-plus/lib/locale/lang/ja'
import elementlangZhTw from 'element-plus/lib/locale/lang/zh-tw'

import localeLangEn from './en'
import localeLangZhCn from './cn'
import localeLangZhTw from './tw'
import localeLangAr from './ar'
import localeLangJa from './ja'

const messages = {
    'zh-cn': {
        ...localeLangZhCn,
        ...elementlangZhCn,
    },
    'en': {
        ...localeLangEn,
        ...elementlangEn,
    },
    'tw': {
        ...localeLangZhTw,
        ...elementlangZhTw,
    },
    'ar': {
        ...localeLangAr,
        ...elementlangAr,
    },
    'ja': {
        ...localeLangJa,
        ...elementlangJa,
    }
}

const i18n = createI18n({
  // locale: 'en',
  locale: window.localStorage.getItem('lang') || 'zh-cn',
    messages
})

export default i18n
