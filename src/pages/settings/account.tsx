import Separator from '@/components/ui/separator';
import AccountForm from '@/components/sections/settings/account/account-form';
import SettingsLayout from '@/components/sections/settings/layout';

export default function SettingsAccountPage() {
  return (
    <SettingsLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Account</h3>
          <p className="text-sm text-muted-foreground">
            Update your account settings. Set your preferred language and
            timezone.
          </p>
        </div>
        <Separator />
        <AccountForm />
      </div>
    </SettingsLayout>
  );
}

SettingsAccountPage.layout = 'base';
