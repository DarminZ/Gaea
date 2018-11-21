import ZAskpaper from './askpaper';
import ZAskpaperPanel from './askpaper-panel';
import ZBtn from './btn';

export default function install(Vue) {
  Vue.component(ZBtn.name, ZBtn);
  Vue.component(ZAskpaperPanel.name, ZAskpaperPanel);
  Vue.component(ZAskpaper.name, ZAskpaper);
}
