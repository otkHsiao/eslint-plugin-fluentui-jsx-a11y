"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.visualLabelBetterThanAriaSuggestion = exports.tooltipNotRecommended = exports.toolbarMissingAria = exports.tablistAndTabsNeedLabelling = exports.switchNeedsLabelling = exports.spinnerNeedsLabelling = exports.spinButtonUnrecommendedLabelling = exports.spinButtonNeedsLabelling = exports.ratingNeedsName = exports.radiogroupMissingLabel = exports.radioButtonMissingLabel = exports.progressbarNeedsLabelling = exports.preferAriaOverTitleAttribute = exports.noEmptyComponents = exports.noEmptyButtons = exports.menuItemNeedsLabelling = exports.linkMissingLabelling = exports.inputComponentsRequireAccessibleName = exports.imageButtonMissingAria = exports.fieldNeedsLabelling = exports.dropdownNeedsLabelling = exports.dialogsurfaceNeedsAria = exports.dialogbodyNeedsTitleContentAndActions = exports.counterBadgeNeedsCount = exports.compoundButtonNeedsLabelling = exports.comboboxNeedsLabelling = exports.checkboxNeedsLabelling = exports.breadcrumbNeedsLabelling = exports.badgeNeedsAccessibleName = exports.avoidUsingAriaDescribedByForPrimaryLabelling = exports.avatarNeedsName = exports.accordionItemNeedsHeaderAndPanel = exports.accordionHeaderNeedsLabelling = void 0;
var accordion_header_needs_labelling_1 = require("./accordion-header-needs-labelling");
Object.defineProperty(exports, "accordionHeaderNeedsLabelling", { enumerable: true, get: function () { return __importDefault(accordion_header_needs_labelling_1).default; } });
var accordion_item_needs_header_and_panel_1 = require("./accordion-item-needs-header-and-panel");
Object.defineProperty(exports, "accordionItemNeedsHeaderAndPanel", { enumerable: true, get: function () { return __importDefault(accordion_item_needs_header_and_panel_1).default; } });
var avatar_needs_name_1 = require("./avatar-needs-name");
Object.defineProperty(exports, "avatarNeedsName", { enumerable: true, get: function () { return __importDefault(avatar_needs_name_1).default; } });
var avoid_using_aria_describedby_for_primary_labelling_1 = require("./avoid-using-aria-describedby-for-primary-labelling");
Object.defineProperty(exports, "avoidUsingAriaDescribedByForPrimaryLabelling", { enumerable: true, get: function () { return __importDefault(avoid_using_aria_describedby_for_primary_labelling_1).default; } });
var badge_needs_accessible_name_1 = require("./badge-needs-accessible-name");
Object.defineProperty(exports, "badgeNeedsAccessibleName", { enumerable: true, get: function () { return __importDefault(badge_needs_accessible_name_1).default; } });
var breadcrumb_needs_labelling_1 = require("./breadcrumb-needs-labelling");
Object.defineProperty(exports, "breadcrumbNeedsLabelling", { enumerable: true, get: function () { return __importDefault(breadcrumb_needs_labelling_1).default; } });
var checkbox_needs_labelling_1 = require("./checkbox-needs-labelling");
Object.defineProperty(exports, "checkboxNeedsLabelling", { enumerable: true, get: function () { return __importDefault(checkbox_needs_labelling_1).default; } });
var combobox_needs_labelling_1 = require("./combobox-needs-labelling");
Object.defineProperty(exports, "comboboxNeedsLabelling", { enumerable: true, get: function () { return __importDefault(combobox_needs_labelling_1).default; } });
var compound_button_needs_labelling_1 = require("./buttons/compound-button-needs-labelling");
Object.defineProperty(exports, "compoundButtonNeedsLabelling", { enumerable: true, get: function () { return __importDefault(compound_button_needs_labelling_1).default; } });
var counter_badge_needs_count_1 = require("./counter-badge-needs-count");
Object.defineProperty(exports, "counterBadgeNeedsCount", { enumerable: true, get: function () { return __importDefault(counter_badge_needs_count_1).default; } });
var dialogbody_needs_title_content_and_actions_1 = require("./dialogbody-needs-title-content-and-actions");
Object.defineProperty(exports, "dialogbodyNeedsTitleContentAndActions", { enumerable: true, get: function () { return __importDefault(dialogbody_needs_title_content_and_actions_1).default; } });
var dialogsurface_needs_aria_1 = require("./dialogsurface-needs-aria");
Object.defineProperty(exports, "dialogsurfaceNeedsAria", { enumerable: true, get: function () { return __importDefault(dialogsurface_needs_aria_1).default; } });
var dropdown_needs_labelling_1 = require("./dropdown-needs-labelling");
Object.defineProperty(exports, "dropdownNeedsLabelling", { enumerable: true, get: function () { return __importDefault(dropdown_needs_labelling_1).default; } });
var field_needs_labelling_1 = require("./field-needs-labelling");
Object.defineProperty(exports, "fieldNeedsLabelling", { enumerable: true, get: function () { return __importDefault(field_needs_labelling_1).default; } });
var image_button_missing_aria_1 = require("./buttons/image-button-missing-aria");
Object.defineProperty(exports, "imageButtonMissingAria", { enumerable: true, get: function () { return __importDefault(image_button_missing_aria_1).default; } });
var input_components_require_accessible_name_1 = require("./input-components-require-accessible-name");
Object.defineProperty(exports, "inputComponentsRequireAccessibleName", { enumerable: true, get: function () { return __importDefault(input_components_require_accessible_name_1).default; } });
var link_missing_labelling_1 = require("./link-missing-labelling");
Object.defineProperty(exports, "linkMissingLabelling", { enumerable: true, get: function () { return __importDefault(link_missing_labelling_1).default; } });
var menu_item_needs_labelling_1 = require("./menu-item-needs-labelling");
Object.defineProperty(exports, "menuItemNeedsLabelling", { enumerable: true, get: function () { return __importDefault(menu_item_needs_labelling_1).default; } });
var no_empty_buttons_1 = require("./buttons/no-empty-buttons");
Object.defineProperty(exports, "noEmptyButtons", { enumerable: true, get: function () { return __importDefault(no_empty_buttons_1).default; } });
var no_empty_components_1 = require("./no-empty-components");
Object.defineProperty(exports, "noEmptyComponents", { enumerable: true, get: function () { return __importDefault(no_empty_components_1).default; } });
var prefer_aria_over_title_attribute_1 = require("./prefer-aria-over-title-attribute");
Object.defineProperty(exports, "preferAriaOverTitleAttribute", { enumerable: true, get: function () { return __importDefault(prefer_aria_over_title_attribute_1).default; } });
var progressbar_needs_labelling_1 = require("./progressbar-needs-labelling");
Object.defineProperty(exports, "progressbarNeedsLabelling", { enumerable: true, get: function () { return __importDefault(progressbar_needs_labelling_1).default; } });
var radio_button_missing_label_1 = require("./radio-button-missing-label");
Object.defineProperty(exports, "radioButtonMissingLabel", { enumerable: true, get: function () { return __importDefault(radio_button_missing_label_1).default; } });
var radiogroup_missing_label_1 = require("./radiogroup-missing-label");
Object.defineProperty(exports, "radiogroupMissingLabel", { enumerable: true, get: function () { return __importDefault(radiogroup_missing_label_1).default; } });
var rating_needs_name_1 = require("./rating-needs-name");
Object.defineProperty(exports, "ratingNeedsName", { enumerable: true, get: function () { return __importDefault(rating_needs_name_1).default; } });
var spin_button_needs_labelling_1 = require("./spin-button-needs-labelling");
Object.defineProperty(exports, "spinButtonNeedsLabelling", { enumerable: true, get: function () { return __importDefault(spin_button_needs_labelling_1).default; } });
var spin_button_unrecommended_labelling_1 = require("./spin-button-unrecommended-labelling");
Object.defineProperty(exports, "spinButtonUnrecommendedLabelling", { enumerable: true, get: function () { return __importDefault(spin_button_unrecommended_labelling_1).default; } });
var spinner_needs_labelling_1 = require("./spinner-needs-labelling");
Object.defineProperty(exports, "spinnerNeedsLabelling", { enumerable: true, get: function () { return __importDefault(spinner_needs_labelling_1).default; } });
var switch_needs_labelling_1 = require("./switch-needs-labelling");
Object.defineProperty(exports, "switchNeedsLabelling", { enumerable: true, get: function () { return __importDefault(switch_needs_labelling_1).default; } });
var tablist_and_tabs_need_labelling_1 = require("./tablist-and-tabs-need-labelling");
Object.defineProperty(exports, "tablistAndTabsNeedLabelling", { enumerable: true, get: function () { return __importDefault(tablist_and_tabs_need_labelling_1).default; } });
var toolbar_missing_aria_1 = require("./toolbar-missing-aria");
Object.defineProperty(exports, "toolbarMissingAria", { enumerable: true, get: function () { return __importDefault(toolbar_missing_aria_1).default; } });
var tooltip_not_recommended_1 = require("./tooltip-not-recommended");
Object.defineProperty(exports, "tooltipNotRecommended", { enumerable: true, get: function () { return __importDefault(tooltip_not_recommended_1).default; } });
var visual_label_better_than_aria_suggestion_1 = require("./visual-label-better-than-aria-suggestion");
Object.defineProperty(exports, "visualLabelBetterThanAriaSuggestion", { enumerable: true, get: function () { return __importDefault(visual_label_better_than_aria_suggestion_1).default; } });
