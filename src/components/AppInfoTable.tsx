import {
  APP_SIZE,
  APP_VERSION,
  APP_DEVELOPER,
  APP_LAST_UPDATE,
  APP_RATING_VALUE,
  APP_RATING_COUNT,
  APP_DOWNLOADS_LABEL,
  OFFICIAL_SITE_URL,
  SITE_NAME,
} from '@/lib/site';

const appInfoRows = [
  { label: 'App Name', value: SITE_NAME },
  {
    label: 'Developer',
    value: APP_DEVELOPER,
    href: OFFICIAL_SITE_URL,
  },
  { label: 'Category', value: 'Cards, Casino, Game' },
  { label: 'App Size', value: APP_SIZE },
  { label: 'Version', value: APP_VERSION },
  { label: 'Required OS', value: 'Android 5.0+' },
  { label: 'Last Update', value: APP_LAST_UPDATE },
  { label: 'Downloads', value: APP_DOWNLOADS_LABEL },
  { label: 'Rating', value: `${APP_RATING_VALUE} ★ (${Number(APP_RATING_COUNT).toLocaleString()}+)` },
  { label: 'Language', value: 'English' },
  { label: 'Price', value: 'Free (0 PKR)' },
];

export default function AppInfoTable() {
  return (
    <div className="app-info-table mt-12">
      <div className="app-info-table-header">
        <h2>{SITE_NAME} APK Details</h2>
      </div>
      <div className="app-info-table-body">
        {appInfoRows.map(({ label, value, href }) => (
          <div key={label} className="app-info-row">
            <span className="app-info-label">{label}</span>
            <span className="app-info-value">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  {value}
                </a>
              ) : (
                value
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
