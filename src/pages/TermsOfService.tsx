import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
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
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Terms of Service</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-foreground">
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using this application, you agree to allow us to view and manage your Google 
                Classroom assignments on your behalf. These terms govern your use of the Classroom 
                Portal application.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Use of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                This application provides a dashboard interface for viewing and interacting with 
                your Google Classroom data. You agree to use this service only for its intended 
                educational purposes.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Google Account Authorization</h2>
              <p className="text-muted-foreground leading-relaxed">
                To use this application, you must authorize access to your Google Classroom account. 
                You can revoke this access at any time through your Google Account settings.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">User Responsibilities</h2>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree not to misuse or abuse the application</li>
                <li>You must comply with your institution's acceptable use policies</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                This application is provided "as is" without warranties of any kind. We are not 
                liable for any damages arising from the use or inability to use this service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the 
                application after changes constitutes acceptance of the new terms.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
