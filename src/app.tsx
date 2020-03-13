import constant from '@/component/constant'

export function onRouteChange() {
    document.title = constant.pageTitle + " " + constant.version;
}