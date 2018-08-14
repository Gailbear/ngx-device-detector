import { Inject, Injectable, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Created by ahsanayaz on 08/11/2016.
 */
/** @type {?} */
var BROWSERS = {
    CHROME: 'chrome',
    FIREFOX: 'firefox',
    SAFARI: 'safari',
    OPERA: 'opera',
    IE: 'ie',
    MS_EDGE: 'ms-edge',
    FB_MESSANGER: 'fb-messanger',
    SAMSUNG: 'samsung',
    UNKNOWN: 'unknown'
};
/** @type {?} */
var DEVICES = {
    ANDROID: 'android',
    I_PAD: 'ipad',
    IPHONE: 'iphone',
    I_POD: 'ipod',
    BLACKBERRY: 'blackberry',
    FIREFOX_OS: 'firefox-os',
    CHROME_BOOK: 'chrome-book',
    WINDOWS_PHONE: 'windows-phone',
    PS4: 'ps4',
    VITA: 'vita',
    CHROMECAST: 'chromecast',
    APPLE_TV: 'apple-tv',
    GOOGLE_TV: 'google-tv',
    UNKNOWN: 'unknown'
};
/** @type {?} */
var OS = {
    WINDOWS: 'windows',
    MAC: 'mac',
    IOS: 'ios',
    ANDROID: 'android',
    LINUX: 'linux',
    UNIX: 'unix',
    FIREFOX_OS: 'firefox-os',
    CHROME_OS: 'chrome-os',
    WINDOWS_PHONE: 'windows-phone',
    UNKNOWN: 'unknown'
};
/** @type {?} */
var OS_VERSIONS = {
    WINDOWS_3_11: 'windows-3-11',
    WINDOWS_95: 'windows-95',
    WINDOWS_ME: 'windows-me',
    WINDOWS_98: 'windows-98',
    WINDOWS_CE: 'windows-ce',
    WINDOWS_2000: 'windows-2000',
    WINDOWS_XP: 'windows-xp',
    WINDOWS_SERVER_2003: 'windows-server-2003',
    WINDOWS_VISTA: 'windows-vista',
    WINDOWS_7: 'windows-7',
    WINDOWS_8_1: 'windows-8-1',
    WINDOWS_8: 'windows-8',
    WINDOWS_10: 'windows-10',
    WINDOWS_PHONE_7_5: 'windows-phone-7-5',
    WINDOWS_PHONE_8_1: 'windows-phone-8-1',
    WINDOWS_PHONE_10: 'windows-phone-10',
    WINDOWS_NT_4_0: 'windows-nt-4-0',
    MACOSX_15: 'mac-os-x-15',
    MACOSX_14: 'mac-os-x-14',
    MACOSX_13: 'mac-os-x-13',
    MACOSX_12: 'mac-os-x-12',
    MACOSX_11: 'mac-os-x-11',
    MACOSX_10: 'mac-os-x-10',
    MACOSX_9: 'mac-os-x-9',
    MACOSX_8: 'mac-os-x-8',
    MACOSX_7: 'mac-os-x-7',
    MACOSX_6: 'mac-os-x-6',
    MACOSX_5: 'mac-os-x-5',
    MACOSX_4: 'mac-os-x-4',
    MACOSX_3: 'mac-os-x-3',
    MACOSX_2: 'mac-os-x-2',
    MACOSX: 'mac-os-x',
    UNKNOWN: 'unknown'
};
/** @type {?} */
var OS_RE = {
    WINDOWS: { and: [{ or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/] }, { not: /\bWindows Phone\b/ }] },
    MAC: { and: [/\bMac OS\b/, { not: /\bWindows Phone\b/ }] },
    IOS: { and: [{ or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/] }, { not: /\bWindows Phone\b/ }] },
    ANDROID: { and: [/\bAndroid\b/, { not: /\bWindows Phone\b/ }] },
    LINUX: /\bLinux\b/,
    UNIX: /\bUNIX\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /Mobile\b/] },
    CHROME_OS: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
/** @type {?} */
var BROWSERS_RE = {
    CHROME: { and: [{ or: [/\bChrome\b/, /\bCriOS\b/] }, { not: { or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bSamsungBrowser\b/] } }] },
    FIREFOX: /\bFirefox\b/,
    SAFARI: { and: [/^((?!CriOS).)*\Safari\b.*$/, { not: { or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bWindows Phone\b/, /\bSamsungBrowser\b/] } }] },
    OPERA: { or: [/Opera\b/, /\bOPR\b/] },
    IE: { or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/] },
    MS_EDGE: { or: [/\bEdg(e|A|iOS)\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
    FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/,
    SAMSUNG: /\bSamsungBrowser\b/
};
/** @type {?} */
var DEVICES_RE = {
    ANDROID: { and: [/\bAndroid\b/, { not: /Windows Phone/ }] },
    I_PAD: /\biPad\b/,
    IPHONE: { and: [/\biPhone\b/, { not: /Windows Phone/ }] },
    I_POD: /\biPod\b/,
    BLACKBERRY: /\bblackberry\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /\bMobile\b/] },
    CHROME_BOOK: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    CHROMECAST: /\bCrKey\b/,
    APPLE_TV: /^iTunes-AppleTV\/4.1$/,
    GOOGLE_TV: /\bGoogleTV\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
/** @type {?} */
var OS_VERSIONS_RE = {
    WINDOWS_3_11: /Win16/,
    WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
    WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
    WINDOWS_98: /(Windows 98|Win98)/,
    WINDOWS_CE: /Windows CE/,
    WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
    WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
    WINDOWS_SERVER_2003: /Windows NT 5.2/,
    WINDOWS_VISTA: /Windows NT 6.0/,
    WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
    WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
    WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
    WINDOWS_10: /(Windows NT 10.0)/,
    WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
    WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
    WINDOWS_PHONE_10: /(Windows Phone 10)/,
    WINDOWS_NT_4_0: { and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, { not: /Windows NT 10.0/ }] },
    MACOSX: /(MAC OS X\s*[^ 0-9])/,
    MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
    MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
    MACOSX_5: /(Mac OS X 10.5)/,
    MACOSX_6: /(Mac OS X 10.6)/,
    MACOSX_7: /(Mac OS X 10.7)/,
    MACOSX_8: /(Mac OS X 10.8)/,
    MACOSX_9: /(Mac OS X 10.9)/,
    MACOSX_10: /(Mac OS X 10.10)/,
    MACOSX_11: /(Mac OS X 10.11)/,
    MACOSX_12: /(Mac OS X 10.12)/,
    MACOSX_13: /(Mac OS X 10.13)/,
    MACOSX_14: /(Mac OS X 10.14)/,
    MACOSX_15: /(Mac OS X 10.15)/
};
/** @type {?} */
var BROWSER_VERSIONS_RE_MAP = {
    CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/],
    FIREFOX: /\bFirefox\/([\d\.]+)\b/,
    SAFARI: /\bVersion\/([\d\.]+)\b/,
    OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
    IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
    MS_EDGE: /\bEdg(e|A|iOS)\/([\d\.]+)\b/,
    SAMSUNG: /\bSamsungBrowser\/([\d\.]+)\b/
};
/** @type {?} */
var BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
    return obj;
}, {});


var Constants = Object.freeze({
	BROWSERS: BROWSERS,
	DEVICES: DEVICES,
	OS: OS,
	OS_VERSIONS: OS_VERSIONS,
	OS_RE: OS_RE,
	BROWSERS_RE: BROWSERS_RE,
	DEVICES_RE: DEVICES_RE,
	OS_VERSIONS_RE: OS_VERSIONS_RE,
	BROWSER_VERSIONS_RE_MAP: BROWSER_VERSIONS_RE_MAP,
	BROWSER_VERSIONS_RE: BROWSER_VERSIONS_RE
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Created by ahsanayaz on 08/11/2016.
 */
var ReTree = /** @class */ (function () {
    function ReTree() {
    }
    /**
     * @param {?} string
     * @param {?} regex
     * @return {?}
     */
    ReTree.prototype.test = /**
     * @param {?} string
     * @param {?} regex
     * @return {?}
     */
    function (string, regex) {
        /** @type {?} */
        var self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !self.test(string, regex.not);
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} string
     * @param {?} regex
     * @return {?}
     */
    ReTree.prototype.exec = /**
     * @param {?} string
     * @param {?} regex
     * @return {?}
     */
    function (string, regex) {
        /** @type {?} */
        var self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : self.exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    };
    return ReTree;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @record
 */

var DeviceDetectorService = /** @class */ (function () {
    function DeviceDetectorService(platformId) {
        this.platformId = platformId;
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
        if (isPlatformBrowser(this.platformId)) {
            this.ua = window.navigator.userAgent;
        }
        this._setDeviceInfo();
    }
    /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     * @return {?}
     */
    DeviceDetectorService.prototype._setDeviceInfo = /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var reTree = new ReTree();
        /** @type {?} */
        var ua = this.ua;
        this.userAgent = ua;
        /** @type {?} */
        var mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach(function (mapping) {
            _this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce(function (obj, item) {
                obj[Constants[mapping.const][item]] = reTree.test(ua, Constants[mapping.const + "_RE"][item]);
                return obj;
            }, {});
        });
        mappings.forEach(function (mapping) {
            _this[mapping.prop] = Object.keys(Constants[mapping.const])
                .map(function (key) {
                return Constants[mapping.const][key];
            }).reduce(function (previousValue, currentValue) {
                return (previousValue === Constants[mapping.const].UNKNOWN && _this[mapping.prop][currentValue])
                    ? currentValue : previousValue;
            }, Constants[mapping.const].UNKNOWN);
        });
        this.browser_version = '0';
        if (this.browser !== BROWSERS.UNKNOWN) {
            /** @type {?} */
            var re = BROWSER_VERSIONS_RE[this.browser];
            /** @type {?} */
            var res = reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    };
    /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @return {?} the device information object.
     */
    DeviceDetectorService.prototype.getDeviceInfo = /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @return {?} the device information object.
     */
    function () {
        /** @type {?} */
        var deviceInfo = {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version
        };
        return deviceInfo;
    };
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile.
     * @return {?} whether the current device is a mobile
     */
    DeviceDetectorService.prototype.isMobile = /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile.
     * @return {?} whether the current device is a mobile
     */
    function () {
        var _this = this;
        return [
            DEVICES.ANDROID,
            DEVICES.IPHONE,
            DEVICES.I_POD,
            DEVICES.BLACKBERRY,
            DEVICES.FIREFOX_OS,
            DEVICES.WINDOWS_PHONE,
            DEVICES.VITA
        ].some(function (item) {
            return _this.device === item;
        });
    };
    
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @return {?} whether the current device is a tablet
     */
    DeviceDetectorService.prototype.isTablet = /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @return {?} whether the current device is a tablet
     */
    function () {
        var _this = this;
        return [
            DEVICES.I_PAD,
            DEVICES.FIREFOX_OS
        ].some(function (item) {
            return _this.device === item;
        });
    };
    
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @return {?} whether the current device is a desktop device
     */
    DeviceDetectorService.prototype.isDesktop = /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @return {?} whether the current device is a desktop device
     */
    function () {
        var _this = this;
        return [
            DEVICES.PS4,
            DEVICES.CHROME_BOOK,
            DEVICES.UNKNOWN
        ].some(function (item) {
            return _this.device === item;
        });
    };
    
    DeviceDetectorService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DeviceDetectorService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return DeviceDetectorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var DeviceDetectorModule = /** @class */ (function () {
    function DeviceDetectorModule() {
    }
    /**
     * @return {?}
     */
    DeviceDetectorModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DeviceDetectorModule,
            providers: [DeviceDetectorService]
        };
    };
    DeviceDetectorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] },
    ];
    return DeviceDetectorModule;
}());

export { DeviceDetectorModule, DeviceDetectorService, ReTree, BROWSERS, DEVICES, OS, OS_VERSIONS, OS_RE, BROWSERS_RE, DEVICES_RE, OS_VERSIONS_RE, BROWSER_VERSIONS_RE_MAP, BROWSER_VERSIONS_RE };
