import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

/**
 *  图标注册 只调用一次就可以了， Icon注册表中注册一次，在所有的地方使用即可
 * @param {MdIconRegistry} iconRegistry
 * @param {DomSanitizer} sanitizer
 */
export const loadSvgResource = (iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) => {
  iconRegistry.addSvgIcon('position', sanitizer.bypassSecurityTrustResourceUrl('assets/svgicon/position.svg'));
}
