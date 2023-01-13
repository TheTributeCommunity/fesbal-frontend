import {FC} from "react";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import ReferralSheetProps from "../../types/ReferralSheetProps";
import classNames from "classnames";

const menuReferralCard: FC<ReferralSheetProps> = ({fullname, uploadDate, familyMembers, expiredDate, status}) => {
    const {t} = useTranslation(namespaces.pages.menuReferral);
    // "border border-primary-color rounded-2xl px-3 py-1 font-label text-primary-color">
    const statusClasses = classNames(
        'border',
        'rounded-2xl',
        'px-3',
        'py-1',
        'font-label',
        {
            'border-primary-color text-primary-color': status === 'approved',
            'border-secondary-color text-secondary-color': status === 'pending',
            'border-warning-color text-warning-color': status === 'expired',
    });

    return (
        <ul className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-6">
            <li>
                <div className="flex flex-row justify-between items-center">
                    <p className="font-label text-primary-color">
                        {t('date')} {uploadDate.toLocaleDateString()}
                    </p>
                    <p>
                        <span
                            className={statusClasses}>
                            {t(status)}
                        </span>
                    </p>
                </div>
                <h2 className="font-medium-title">{fullname}</h2>
            </li>
            <li className="flex flex-col gap-2">
                <p className="font-label text-primary-color w-3/4">
                    {t('familyMembers')}
                </p>
                <h2 className="font-input">
                    {familyMembers}
                </h2>
            </li>
            <li className="flex flex-col gap-2">
                <p className="font-label text-primary-color w-3/4">
                    {t('expiringDate')}
                </p>
                <h2 className="font-input">
                    {expiredDate.toLocaleDateString()}
                </h2>
            </li>
            <li>
                <a href="#" className="font-label text-primary-color underline" download="example.pdf">
                    {t('download')}
                </a>
            </li>
        </ul>
    )
}

export default menuReferralCard;
