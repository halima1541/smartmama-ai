
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, User, Bell, Shield, Smartphone } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Settings = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 card-shadow">
        <div className="flex items-center space-x-3">
          <SettingsIcon className="w-6 h-6 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-600" />
              <span>Profile Information</span>
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={user?.name} />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input id="dueDate" type="date" defaultValue="2025-10-15" />
            </div>
            <div>
              <Label htmlFor="pregnancyWeek">Current Pregnancy Week</Label>
              <Input id="pregnancyWeek" type="number" defaultValue={user?.pregnancyWeek} />
            </div>
            <Button className="w-full">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-yellow-600" />
              <span>Notifications</span>
            </CardTitle>
            <CardDescription>Configure your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Medication Reminders</Label>
                <p className="text-sm text-gray-500">Get notified when it's time to take medications</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Weekly Check-in Reminders</Label>
                <p className="text-sm text-gray-500">Reminders to complete your weekly health check-in</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Appointment Reminders</Label>
                <p className="text-sm text-gray-500">Get notified about upcoming appointments</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Risk Alerts</Label>
                <p className="text-sm text-gray-500">Immediate notifications for health concerns</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Weekly Progress Updates</Label>
                <p className="text-sm text-gray-500">Summary of your pregnancy progress</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span>Privacy & Security</span>
            </CardTitle>
            <CardDescription>Manage your data and security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Data Sharing with Healthcare Providers</Label>
                <p className="text-sm text-gray-500">Allow doctors to access your health data</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Anonymous Usage Analytics</Label>
                <p className="text-sm text-gray-500">Help improve HAWI-AI with anonymous data</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900">Internet Computer Identity</h4>
              <p className="text-sm text-blue-800 mt-1">
                Your identity is secured by the Internet Computer blockchain. 
                Your health data is encrypted and stored securely on-chain.
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Export My Data
            </Button>
          </CardContent>
        </Card>

        {/* App Preferences */}
        <Card className="card-shadow border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Smartphone className="w-5 h-5 text-purple-600" />
              <span>App Preferences</span>
            </CardTitle>
            <CardDescription>Customize your app experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                <option>Eastern Time (ET)</option>
                <option>Central Time (CT)</option>
                <option>Mountain Time (MT)</option>
                <option>Pacific Time (PT)</option>
              </select>
            </div>
            <div>
              <Label htmlFor="units">Measurement Units</Label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                <option>Imperial (lbs, inches)</option>
                <option>Metric (kg, cm)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Dark Mode</Label>
                <p className="text-sm text-gray-500">Use dark theme for the app</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Offline Mode</Label>
                <p className="text-sm text-gray-500">Cache data for offline access</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zone */}
      <Card className="card-shadow border-2 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
          <CardDescription>Irreversible actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-medium text-red-900 mb-2">Delete Account</h4>
            <p className="text-sm text-red-800 mb-3">
              This will permanently delete your account and all associated health data. 
              This action cannot be undone.
            </p>
            <Button variant="destructive" size="sm">
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
