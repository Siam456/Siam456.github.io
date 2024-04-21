import Separator from '@/components/ui/separator';
import SettingsLayout from '@/components/sections/settings/layout';
import NotificationsForm from '@/components/sections/settings/notifications/notifications-form';

export default function SettingsNotificationsPage() {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            Configure how you receive notifications.
          </p>
        </div>
        <Separator />
        <NotificationsForm />
      </div>
    </SettingsLayout>
  );
}

SettingsNotificationsPage.layout = 'base';
