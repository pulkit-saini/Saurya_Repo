import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        <Card className="border-border/50">
          <CardHeader className="text-center pb-2">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 mx-auto">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-foreground">
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Data Collection and Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                This application accesses your Google Classroom data (courses, coursework, and rosters) 
                solely for the purpose of displaying them on your student/teacher dashboard. We do not 
                store your data permanently or share it with third parties.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Google Classroom Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you sign in with your Google account, we request access to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>Your Google Classroom courses</li>
                <li>Course assignments and materials</li>
                <li>Student submissions (for teachers)</li>
                <li>Class rosters and announcements</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your Google access token is stored locally in your browser and is never transmitted 
                to our servers. All communication with Google APIs happens directly from your browser.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                This application integrates with Google Classroom API. Your use of Google services 
                is subject to Google's Privacy Policy. We do not share your data with any other 
                third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through 
                the application support channels.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
