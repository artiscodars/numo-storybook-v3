import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../../components/header/header.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { Menu } from "../../components/left-menu/menu.model";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { LeftMenuComponent } from "../../components/left-menu/left-menu.component";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { IconComponent } from "../../components/icon/icon.component";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { TabViewModule } from "primeng/tabview";
import { MenuModule } from "primeng/menu";
import { ButtonModule } from "primeng/button";
import { AccordionModule } from "primeng/accordion";
import { MenuItem, TableData, TableData2 } from "./timeplanning.data";
import { TableModule } from "primeng/table";

@Component({
    selector: "numo-timeplaning",
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        DashboardComponent,
        CardModule,
        CommonModule,
        LeftMenuComponent,
        BreadcrumbModule,
        IconComponent,
        DropdownModule,
        CalendarModule,
        IconComponent,
        TabViewModule,
        MenuModule,
        ButtonModule,
        AccordionModule,
        TableModule,
    ],
    templateUrl: "./timeplaning.template.html",
    styles: [
        `
            .container {
                display: flex;
                grid-gap: 20px;
                margin-top: 20px;
            }

            .menu {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                max-width: 230px;
                @media (max-width: var(--breakpoint)) {
                    display: none;
                }
            }

            .dashboard {
                flex: 1;
            }
            h2 {
                font-size: 20px;
                font-weight: 600;
            }

            .label {
                font-weight: 700;
                font-size: 12px;
            }

            .standard {
                border: 1px solid #98a6ba;
                border-radius: 10.5px;
                width: 75px;
                color: #64748b;
                font-size: 10.5px;
                text-align: center;
                line-height: 21px;
            }
            .header-time {
                font-size: 14px;
                font-weight: 400;
                color: #4b5563;
            }
            .box-p {
                width: 35px;
                padding: 10.5px 12px;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
                border: 1px solid #dfe2eb;
                border-right: unset;
            }
            .box-o {
                width: 35px;
                background-color: #c9e6ff;
                padding: 10.5px 12px;
                border: 1px solid #dfe2eb;
                color: #0f1c2b;
                border-right: unset;
            }
            .box-t {
                width: 35px;
                padding: 10.5px 12px;
                border: 1px solid #dfe2eb;
            }
            .box-cps {
                width: 35px;
                padding: 10.5px 12px;
                border: 1px solid #dfe2eb;
                border-left: unset;
            }
            .box-sv {
                width: 43px;
                background-color: #c9e6ff;
                padding: 10.5px 12px;
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
                color: #0f1c2b;
                border: 1px solid #dfe2eb;
            }
            .icon-left {
                border: 1px solid #d1d5db;
                border-radius: 6px;
                padding: 9px;
                margin-right: 6px;
            }
            .icon-right {
                border: 1px solid #d1d5db;
                border-radius: 6px;
                padding: 9px;
                margin-left: 6px;
            }
            h3 {
                color: #0f1c2b;
                font-size: 14px;
                font-weight: 700;
            }
            :host::ng-deep {
                .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                    border-color: #0f1c2b;
                    color: #0f1c2b;
                }
                .p-accordion .p-accordion-header .p-accordion-header-link {
                    color: #0f1c2b;
                }
                .p-datatable .p-datatable-thead > tr > th {
                    font-weight: 700;
                    font-size: 14px;
                    color: #4b5563;
                    background: #eff6ff;
                }
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled)
                    > .p-menuitem-content:hover {
                    color: #0f1c2b;
                    background: #c9e6ff;
                }
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
                    > .p-menuitem-content
                    .p-menuitem-link
                    .p-menuitem-icon,
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
                    > .p-menuitem-content
                    .p-menuitem-link
                    .p-submenu-icon {
                    color: #0f1c2b;
                }
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
                    > .p-menuitem-content
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f1c2b;
                }
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus
                    > .p-menuitem-content {
                    color: #0f1c2b;
                    background: #c9e6ff;
                }
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled)
                    > .p-menuitem-content:hover
                    .p-menuitem-link
                    .p-menuitem-icon,
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled)
                    > .p-menuitem-content:hover
                    .p-menuitem-link
                    .p-submenu-icon {
                    color: #0f1c2b;
                }
                .p-menu
                    .p-menuitem:not(.p-highlight):not(.p-disabled)
                    > .p-menuitem-content:hover
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f1c2b;
                }
                .p-menu
                    .p-menuitem
                    > .p-menuitem-content
                    .p-menuitem-link
                    .p-menuitem-icon {
                    color: #0f1c2b;
                }
                .p-menu
                    .p-menuitem
                    > .p-menuitem-content
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f1c2b;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    color: #727d8d;
                }
                .p-card .p-card-content {
                    padding: 5px;
                }
                .p-tabview .p-tabview-panels {
                    background: transparent;
                    padding: 1.25rem 0rem;
                }
                .p-menu {
                    width: 14.5rem;
                }
            }
        `,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
    isMenuVisible = true;
    title = "angular-latest";
    items = [{ label: "UZDEVUMI", menu: [...Menu] }];
    home = { icon: "pi pi-home", route: "/" };
    date: Date[] | undefined;
    tableData = TableData;
    tableData2 = TableData2;
    menuItems = MenuItem;

    toggleMenu(isMenuVisible: boolean) {
        this.isMenuVisible = isMenuVisible;
    }

    options = [
        {
            name: "Barona ielas veikals",
        },
    ];
    breadCrumbItems = [
        { label: "Darba laika plānošana", route: "/timeplaning" },
    ];

    itemsWithIsLast = this.breadCrumbItems.map((item, index, array) => ({
        ...item,
        isLast: index === array.length - 1,
    }));
}
