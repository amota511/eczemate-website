import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Eczemate",
  description: "Eczemate's privacy policy. Learn how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-sage-950 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sage-500 text-sm mb-12">
            Effective Date: January 31, 2026
          </p>

          <div className="prose-eczemate space-y-8">
            <Section title="1. Introduction">
              <p>
                Eczemate (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                respects your privacy and is committed to protecting the
                personal information you share with us. This Privacy Policy
                describes how we collect, use, disclose, and safeguard your
                information when you use the Eczemate mobile application (the
                &quot;App&quot;), available on iOS and Android platforms.
              </p>
              <p>
                Eczemate is an eczema management application designed to help you
                track symptoms, predict flare-ups, analyze products and foods,
                monitor your skin with photos, and access educational content.
                By using the App, you agree to the collection and use of
                information in accordance with this Privacy Policy. If you do
                not agree with the terms of this Privacy Policy, please do not
                access or use the App.
              </p>
              <p>
                This Privacy Policy is effective as of January 31, 2026, and
                will remain in effect except with respect to any changes in its
                provisions in the future, which will be in effect immediately
                after being posted on this page.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>
                We collect several different types of information for various
                purposes to provide and improve our service to you.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                2.1 Information You Provide to Us
              </h3>
              <p>
                You may voluntarily provide us with certain personally
                identifiable information when you use the App, including:
              </p>
              <ul>
                <li>
                  <strong>Account Information:</strong> When you create an
                  account using Apple Sign In, we collect your name, email
                  address, and a unique identifier provided by Apple. If you
                  use an anonymous or guest account, we generate a unique
                  identifier but do not collect personal identification
                  information unless you choose to provide it later.
                </li>
                <li>
                  <strong>Health and Symptom Data:</strong> You may choose to
                  log symptom information including itch levels, redness
                  levels, and dryness levels on a 0-10 scale. You may also
                  track which body areas are affected by eczema, record flare-up
                  events, and note environmental or dietary triggers.
                </li>
                <li>
                  <strong>Photographs:</strong> You may upload or capture skin
                  photos to track your eczema progression over time, food photos
                  for dietary analysis to identify potential triggers, and
                  product photos for ingredient analysis.
                </li>
                <li>
                  <strong>Product Scans:</strong> When you scan product barcodes
                  or take photos of product labels, we collect the barcode
                  numbers, product names, ingredient lists, and your personal
                  notes or ratings about the product.
                </li>
                <li>
                  <strong>Food Logs:</strong> Information about foods you
                  consume, including photos, descriptions, and notes about
                  potential reactions or triggers.
                </li>
                <li>
                  <strong>Treatments:</strong> Information about treatments you
                  add to the App, including treatment name, type (topical,
                  oral, or other), frequency, and reminder preferences.
                </li>
                <li>
                  <strong>Routine Data:</strong> If you use the routine feature,
                  we collect your daily skincare routine items (medications,
                  products, and notes), completion status, adherence history,
                  and any block-level notes you add. We also store your
                  routine reminder preferences (morning and night reminder
                  times).
                </li>
                <li>
                  <strong>User Preferences:</strong> Settings, notification
                  preferences, and customization options you select within the
                  App.
                </li>
                <li>
                  <strong>Communications:</strong> If you contact us directly,
                  we may receive additional information about you such as your
                  name, email address, the contents of your message and/or
                  attachments, and any other information you choose to provide.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                2.2 Information Collected Automatically
              </h3>
              <p>
                When you access or use the App, we automatically collect certain
                information about your device and usage patterns:
              </p>
              <ul>
                <li>
                  <strong>Device Information:</strong> Device type, model,
                  manufacturer, operating system type and version, unique device
                  identifiers, and mobile network information.
                </li>
                <li>
                  <strong>Location Data:</strong> With your explicit permission,
                  we access your approximate or precise geographic location to
                  provide localized weather and air quality data for flare risk
                  predictions. You can disable location access through your
                  device settings at any time.
                </li>
                <li>
                  <strong>Usage Analytics:</strong> Information about how you
                  interact with the App, including features used, time spent in
                  the App, navigation paths, button clicks, and session
                  frequency and duration.
                </li>
                <li>
                  <strong>Crash Reports and Diagnostics:</strong> Technical data
                  about App crashes, freezes, and errors to help us diagnose and
                  fix technical issues.
                </li>
                <li>
                  <strong>Camera and Photo Library Access:</strong> When you
                  grant permission, we access your device camera to capture
                  photos of skin, products, and food, and your photo library to
                  select existing images.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                2.3 Information From Third Parties
              </h3>
              <p>We may receive information from third-party sources:</p>
              <ul>
                <li>
                  <strong>Weather Data Providers:</strong> We collect weather
                  information (temperature, humidity, UV index, pollen counts)
                  from third-party weather APIs based on your location.
                </li>
                <li>
                  <strong>Air Quality Data:</strong> Air quality index,
                  pollution levels, and allergen information from environmental
                  data providers.
                </li>
                <li>
                  <strong>Product Databases:</strong> Product information,
                  ingredient lists, and allergen data from OpenFoodFacts and
                  other product databases when you scan barcodes.
                </li>
                <li>
                  <strong>Authentication Providers:</strong> When you sign in
                  with Apple Sign In, we receive limited information from Apple
                  as specified in their authentication flow.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul>
                <li>
                  <strong>Provide Core Functionality:</strong> To enable you to
                  track symptoms, log flare-ups, scan products, analyze food,
                  and monitor your skin condition over time.
                </li>
                <li>
                  <strong>Flare Prediction:</strong> To analyze correlations
                  between your symptom data and environmental factors (weather,
                  air quality) to generate personalized flare-up risk
                  predictions.
                </li>
                <li>
                  <strong>AI-Powered Analysis:</strong> To process your product
                  photos, food photos, and skin photos through artificial
                  intelligence services to provide ingredient analysis, allergen
                  warnings, eczema severity assessment, and personalized
                  recommendations.
                </li>
                <li>
                  <strong>Product and Food Recommendations:</strong> To analyze
                  your product scans and food logs alongside your symptom data
                  to identify potential triggers and recommend safe alternatives.
                </li>
                <li>
                  <strong>Data Synchronization:</strong> To sync your data
                  across multiple devices if you opt into cloud synchronization.
                </li>
                <li>
                  <strong>Account Management:</strong> To create and maintain
                  your account, authenticate your identity, and provide customer
                  support.
                </li>
                <li>
                  <strong>Subscription Management:</strong> To process and
                  manage your Eczemate Pro subscription, including billing,
                  renewals, and access to premium features.
                </li>
                <li>
                  <strong>Notifications:</strong> To send you local push
                  notifications including daily routine reminders (morning and
                  night), symptom tracking reminders, flare risk alerts, and
                  service-related announcements.
                </li>
                <li>
                  <strong>Analytics and Improvement:</strong> To understand how
                  users interact with the App, identify usage patterns, measure
                  feature effectiveness, and improve the user experience.
                </li>
                <li>
                  <strong>Troubleshooting:</strong> To diagnose technical
                  problems, monitor and analyze crashes, and ensure the App
                  operates correctly across different devices and operating
                  systems.
                </li>
                <li>
                  <strong>Security and Fraud Prevention:</strong> To detect,
                  prevent, and address technical issues, fraudulent activity,
                  and violations of our Terms of Service.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable
                  laws, regulations, legal processes, or enforceable
                  governmental requests.
                </li>
                <li>
                  <strong>Research and Development:</strong> To conduct
                  aggregated, anonymized research to better understand eczema
                  patterns and improve our predictive algorithms (no
                  individually identifiable information is used for research
                  purposes without explicit consent).
                </li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing (GDPR Compliance)">
              <p>
                If you are located in the European Economic Area (EEA), our
                legal basis for collecting and using your personal information
                depends on the specific information collected and the context in
                which we collect it. We process your personal information based
                on:
              </p>
              <ul>
                <li>
                  <strong>Consent:</strong> You have given explicit consent for
                  us to process your health data, location data, and photos for
                  the purposes described in this Privacy Policy. You have the
                  right to withdraw your consent at any time.
                </li>
                <li>
                  <strong>Contract Performance:</strong> Processing is necessary
                  to provide the services you have requested through the App and
                  to fulfill our contractual obligations to you.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> We have a legitimate
                  interest in operating, improving, and securing the App,
                  preventing fraud, and conducting analytics, provided that such
                  interests are not overridden by your data protection rights.
                </li>
                <li>
                  <strong>Legal Obligations:</strong> Processing is necessary to
                  comply with applicable laws and regulations.
                </li>
              </ul>
            </Section>

            <Section title="5. Health and Sensitive Data">
              <p>
                Eczemate collects and processes health-related information,
                including symptom logs, body area tracking, skin photographs,
                and information about your eczema condition. We recognize that
                health data is highly sensitive and treat it with the utmost
                care and security.
              </p>
              <p>
                <strong>Important Clarifications:</strong>
              </p>
              <ul>
                <li>
                  <strong>Not HIPAA-Covered:</strong> Eczemate is not a healthcare
                  provider, health plan, or healthcare clearinghouse, and
                  therefore is not subject to the Health Insurance Portability
                  and Accountability Act (HIPAA). The App is a wellness and
                  self-tracking tool, not a medical device or electronic health
                  record system.
                </li>
                <li>
                  <strong>Not Medical Advice:</strong> The App does not provide
                  medical advice, diagnosis, or treatment. All features,
                  predictions, and analyses are for informational and tracking
                  purposes only. You should always consult with qualified
                  healthcare professionals regarding medical decisions.
                </li>
                <li>
                  <strong>High Security Standards:</strong> Despite not being
                  HIPAA-covered, we implement security measures that meet or
                  exceed industry standards for health data protection,
                  including encryption at rest and in transit, secure cloud
                  infrastructure, and limited access controls.
                </li>
                <li>
                  <strong>Explicit Consent:</strong> By using health tracking
                  features, you explicitly consent to our collection and
                  processing of your health data as described in this Privacy
                  Policy. For users in the EEA, this constitutes explicit
                  consent under GDPR Article 9 for processing special categories
                  of personal data.
                </li>
                <li>
                  <strong>Your Control:</strong> You maintain full control over
                  your health data. You can choose what to track, view all data
                  we store about you, export your complete health record, and
                  delete all health data at any time through the App settings.
                </li>
              </ul>
            </Section>

            <Section title="6. Data Storage and Security">
              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                6.1 Local-First Architecture
              </h3>
              <p>
                Eczemate uses a local-first data architecture, which means your data
                is primarily stored on your device using MMKV (a fast,
                efficient, encrypted storage solution). This approach ensures:
              </p>
              <ul>
                <li>Your data remains accessible even without internet</li>
                <li>Faster performance and reduced latency</li>
                <li>Enhanced privacy through device-level storage</li>
                <li>
                  You maintain control over your data on your physical device
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                6.2 Optional Cloud Synchronization
              </h3>
              <p>
                If you create an account and opt into cloud synchronization,
                your data is synced to Firebase Cloud Firestore and Firebase
                Storage. Cloud sync enables:
              </p>
              <ul>
                <li>Access to your data across multiple devices</li>
                <li>Automatic backup to prevent data loss</li>
                <li>Continuity when switching or upgrading devices</li>
              </ul>
              <p>
                You can enable or disable cloud synchronization at any time
                through the App settings. If you disable cloud sync, your data
                will remain on your device but will no longer be backed up or
                synced to the cloud.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                6.3 Security Measures
              </h3>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul>
                <li>
                  <strong>Encryption at Rest:</strong> Data stored on your
                  device is encrypted using platform-level encryption (iOS
                  Keychain, Android Keystore). Data stored in Firebase is
                  encrypted at rest using AES-256 encryption.
                </li>
                <li>
                  <strong>Encryption in Transit:</strong> All data transmitted
                  between the App and our servers uses TLS/SSL encryption to
                  prevent interception.
                </li>
                <li>
                  <strong>Secure Authentication:</strong> We use Apple Sign In
                  and Firebase Authentication, which employ industry-standard
                  security protocols including OAuth 2.0.
                </li>
                <li>
                  <strong>Access Controls:</strong> Strict access controls limit
                  who can access user data within our systems. Access is granted
                  on a need-to-know basis and is logged for audit purposes.
                </li>
                <li>
                  <strong>Firebase Security Rules:</strong> We implement strict
                  Firebase Security Rules to ensure users can only access their
                  own data and cannot access other users&apos; information.
                </li>
                <li>
                  <strong>Regular Security Audits:</strong> We regularly review
                  and update our security practices to address emerging threats
                  and vulnerabilities.
                </li>
              </ul>
              <p>
                While we strive to protect your personal information, no method
                of transmission over the internet or electronic storage is 100%
                secure. We cannot guarantee absolute security but are committed
                to protecting your information using industry best practices.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                6.4 Data Location
              </h3>
              <p>
                When you use cloud synchronization, your data is stored on
                Firebase servers, which are part of Google Cloud Platform
                infrastructure. Firebase may store data in multiple regions for
                redundancy and performance. Data may be processed in the United
                States and other countries where Firebase and our service
                providers operate.
              </p>
            </Section>

            <Section title="7. Third-Party Services">
              <p>
                The App integrates with several third-party services to provide
                functionality. Each service may collect and process certain data
                as described below. These third-party services have their own
                privacy policies, and we encourage you to review them.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                7.1 Firebase (Google)
              </h3>
              <p>
                <strong>Services Used:</strong> Firebase Authentication,
                Firestore (database), Firebase Storage (file storage), Firebase
                Cloud Functions (serverless computing)
              </p>
              <p>
                <strong>Data Shared:</strong> Account information, health and
                symptom data (if cloud sync enabled), photos (if cloud sync
                enabled), device information, usage analytics
              </p>
              <p>
                <strong>Purpose:</strong> User authentication, cloud data
                storage and synchronization, backend processing
              </p>
              <p>
                <strong>Privacy Policy:</strong> Firebase is part of Google
                Cloud Platform. Review Google&apos;s privacy policy at
                https://policies.google.com/privacy and Firebase-specific terms
                at https://firebase.google.com/support/privacy
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                7.2 RevenueCat
              </h3>
              <p>
                <strong>Services Used:</strong> Subscription management and
                in-app purchase processing
              </p>
              <p>
                <strong>Data Shared:</strong> Anonymous user identifier,
                subscription status, purchase transactions, device type, App
                version
              </p>
              <p>
                <strong>Purpose:</strong> Manage Eczemate Pro subscriptions,
                process in-app purchases, verify purchase status, provide access
                to premium features
              </p>
              <p>
                <strong>Privacy Policy:</strong>{" "}
                https://www.revenuecat.com/privacy
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                7.3 OpenAI API
              </h3>
              <p>
                <strong>Services Used:</strong> Artificial intelligence analysis
                (GPT models with vision capabilities)
              </p>
              <p>
                <strong>Data Shared:</strong> Product photos, product ingredient
                text, food photos, skin photos, symptom context (when relevant
                to analysis)
              </p>
              <p>
                <strong>Purpose:</strong> Analyze product ingredients for
                potential irritants, identify foods and potential allergens,
                assess skin photos for eczema severity and characteristics,
                provide personalized recommendations
              </p>
              <p>
                <strong>Important Notes:</strong> As of our last verification,
                OpenAI does not use data submitted via API for model training
                unless you explicitly opt in. Your photos and data sent to
                OpenAI are processed to provide immediate analysis and are not
                retained long-term by OpenAI.
              </p>
              <p>
                <strong>Privacy Policy:</strong> https://openai.com/privacy
              </p>
              <p>
                <strong>API Data Usage:</strong> https://openai.com/enterprise-privacy
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                7.4 Weather and Air Quality APIs
              </h3>
              <p>
                <strong>Services Used:</strong> Third-party weather data
                providers (specific providers may vary)
              </p>
              <p>
                <strong>Data Shared:</strong> Your approximate geographic
                location (city/region level, not precise coordinates)
              </p>
              <p>
                <strong>Purpose:</strong> Retrieve local weather conditions (temperature, humidity, UV index) and air quality data (pollution levels, pollen counts, allergen information) to generate flare risk predictions
              </p>
              <p>
                We use reputable weather API providers with established privacy
                practices. Location data is only shared when necessary to
                retrieve weather information and is not stored by these
                providers beyond the immediate request.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                7.5 OpenFoodFacts
              </h3>
              <p>
                <strong>Services Used:</strong> Open-source food product database
              </p>
              <p>
                <strong>Data Shared:</strong> Barcode numbers when you scan
                products
              </p>
              <p>
                <strong>Purpose:</strong> Retrieve product information,
                ingredient lists, and nutritional data for scanned barcodes
              </p>
              <p>
                <strong>Privacy:</strong> OpenFoodFacts is an open database.
                Barcode lookups do not contain personally identifiable
                information. Learn more at https://world.openfoodfacts.org/privacy-policy
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                7.6 Apple App Store and Google Play Store
              </h3>
              <p>
                <strong>Services Used:</strong> App distribution, in-app
                purchases, subscription billing
              </p>
              <p>
                <strong>Data Shared:</strong> Purchase information, payment
                details (handled directly by Apple/Google, not visible to us)
              </p>
              <p>
                <strong>Purpose:</strong> Process Eczemate Pro subscriptions and
                in-app purchases
              </p>
              <p>
                <strong>Privacy Policies:</strong> Apple Privacy Policy at
                https://www.apple.com/privacy/ and Google Privacy Policy at
                https://policies.google.com/privacy
              </p>
            </Section>

            <Section title="8. AI-Powered Features">
              <p>
                Eczemate uses artificial intelligence to provide enhanced analysis
                and insights. Understanding how AI features work and what data
                they use is important for your privacy.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                8.1 How AI Features Work
              </h3>
              <ul>
                <li>
                  <strong>Product Scanning:</strong> When you scan or photograph
                  a product, the image and/or ingredient text is sent to OpenAI
                  API for analysis. The AI identifies potential irritants,
                  allergens, and problematic ingredients commonly associated
                  with eczema triggers.
                </li>
                <li>
                  <strong>Food Photo Analysis:</strong> Food photos are analyzed
                  by AI to identify ingredients, potential allergens, and common
                  eczema trigger foods.
                </li>
                <li>
                  <strong>Skin Photo Analysis:</strong> Skin photos are
                  processed by AI vision models to assess eczema severity,
                  identify affected areas, and track changes over time. This
                  helps you visualize your progress and identify patterns.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                8.2 Data Handling in AI Processing
              </h3>
              <ul>
                <li>
                  <strong>Transmitted Data:</strong> Only the specific photo or
                  text being analyzed is sent to the AI service, along with
                  minimal context needed for analysis (e.g., &quot;analyze this
                  product for eczema triggers&quot;).
                </li>
                <li>
                  <strong>No Training Use:</strong> Based on OpenAI&apos;s
                  current API policies, data submitted through the API is not
                  used to train or improve their models unless explicitly opted
                  in. We have not opted in, which means your photos and data are
                  only used to provide you with immediate analysis.
                </li>
                <li>
                  <strong>Temporary Processing:</strong> AI providers process
                  your data to generate results but do not retain it long-term.
                </li>
                <li>
                  <strong>No Personal Identifiers:</strong> We do not send
                  personally identifiable information (name, email, account ID)
                  to AI services. Photos and ingredient text are analyzed
                  independently without linking to your identity.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                8.3 Your Control Over AI Features
              </h3>
              <p>
                Use of AI-powered analysis features is entirely optional. You
                can:
              </p>
              <ul>
                <li>
                  Choose which photos to analyze and which to keep only on your
                  device
                </li>
                <li>
                  Use manual product entry instead of AI analysis if you prefer
                </li>
                <li>
                  Track symptoms and flares without using photo analysis
                  features
                </li>
                <li>
                  Delete any analyzed photos from the App at any time, which
                  also removes them from cloud storage if enabled
                </li>
              </ul>
            </Section>

            <Section title="9. Data Sharing and Disclosure">
              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                9.1 We Do Not Sell Your Data
              </h3>
              <p>
                We do not sell, rent, trade, or otherwise transfer your personal
                information to third parties for their marketing purposes. Eczemate
                does not display advertisements and does not participate in ad
                networks. Your health data and personal information are not
                commodities.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                9.2 When We May Share Information
              </h3>
              <p>
                We may share your information only in the following limited
                circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We share data with
                  third-party service providers who perform services on our
                  behalf (as detailed in the Third-Party Services section
                  above). These providers are contractually obligated to use
                  your information only to provide services to us and not for
                  their own purposes.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your
                  information if required to do so by law or in response to
                  valid requests by public authorities (e.g., court orders,
                  subpoenas, government investigations).
                </li>
                <li>
                  <strong>Protection of Rights:</strong> We may disclose
                  information when we believe in good faith that disclosure is
                  necessary to protect our rights, your safety or the safety of
                  others, investigate fraud, or respond to a government request.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If Eczemate is involved in a
                  merger, acquisition, asset sale, or bankruptcy, your
                  information may be transferred as part of that transaction. We
                  will provide notice before your information is transferred and
                  becomes subject to a different privacy policy.
                </li>
                <li>
                  <strong>Aggregated and Anonymized Data:</strong> We may share
                  aggregated, de-identified, or anonymized information that
                  cannot reasonably be used to identify you. For example, we may
                  share statistics about eczema symptom patterns or
                  environmental correlations for research purposes, but this
                  data would not contain any personally identifiable
                  information.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your
                  information for any other purpose with your explicit consent.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                9.3 No Sharing with Healthcare Providers
              </h3>
              <p>
                Eczemate does not automatically share your data with healthcare
                providers, insurers, or health systems. If you wish to share
                your symptom logs or data with your doctor, you can export your
                data through the App and share it manually at your discretion.
              </p>
            </Section>

            <Section title="10. Data Retention">
              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                10.1 How Long We Keep Your Data
              </h3>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law.
              </p>
              <ul>
                <li>
                  <strong>Active Accounts:</strong> While your account is
                  active, we retain your data to provide ongoing service,
                  including symptom history, photos, product scans, and
                  preferences.
                </li>
                <li>
                  <strong>Inactive Accounts:</strong> If you stop using the App
                  but do not delete your account, your data remains stored
                  according to your cloud sync settings (locally on device,
                  and/or in the cloud if enabled).
                </li>
                <li>
                  <strong>Deleted Accounts:</strong> When you delete your
                  account through the App settings, we permanently delete your
                  personal data from our systems within 30 days, subject to the
                  exceptions below.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                10.2 What Happens When You Delete Your Account
              </h3>
              <p>
                When you request account deletion:
              </p>
              <ul>
                <li>
                  All symptom logs, health data, photos, and personal notes are
                  permanently deleted from our cloud servers within 30 days
                </li>
                <li>
                  Your account information (email, name, authentication data) is
                  removed from Firebase Authentication
                </li>
                <li>
                  Data stored locally on your device is cleared when you
                  uninstall the App or delete your account within the App
                </li>
                <li>
                  Your subscription status is marked as cancelled (subscription
                  billing through Apple/Google is handled separately and may
                  require cancellation through your App Store account)
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                10.3 Data Retention Exceptions
              </h3>
              <p>
                We may retain certain information even after account deletion in
                the following cases:
              </p>
              <ul>
                <li>
                  <strong>Legal Obligations:</strong> Information required to be
                  retained for tax, accounting, or legal compliance purposes
                  (e.g., purchase records, transaction history) may be kept for
                  periods required by applicable law.
                </li>
                <li>
                  <strong>Aggregated Data:</strong> Anonymized and aggregated
                  data that cannot be used to identify you may be retained
                  indefinitely for research and analytics.
                </li>
                <li>
                  <strong>Backup Systems:</strong> Data in backup systems may
                  persist for a limited time (typically 30-90 days) before being
                  permanently purged during routine backup cycles.
                </li>
                <li>
                  <strong>Fraud and Security:</strong> If your account was
                  involved in fraudulent activity, violations of Terms of
                  Service, or security incidents, relevant information may be
                  retained as necessary to prevent recurrence and protect other
                  users.
                </li>
              </ul>
            </Section>

            <Section title="11. International Data Transfers">
              <p>
                Eczemate is operated from the United States. If you are located
                outside the United States, please be aware that information we
                collect, including personal information and health data, may be
                transferred to, stored in, and processed in the United States
                and other countries where our service providers operate.
              </p>
              <p>
                These countries may have data protection laws that are different
                from the laws of your country. By using the App, you consent to
                the transfer of your information to the United States and other
                countries where we and our service providers operate.
              </p>
              <p>
                For users in the European Economic Area (EEA), United Kingdom,
                and Switzerland, we rely on the following mechanisms for
                international data transfers:
              </p>
              <ul>
                <li>
                  <strong>Standard Contractual Clauses:</strong> We use Standard
                  Contractual Clauses approved by the European Commission for
                  transfers to service providers outside the EEA.
                </li>
                <li>
                  <strong>Adequacy Decisions:</strong> Where applicable, we rely
                  on adequacy decisions by the European Commission recognizing
                  that certain countries provide adequate data protection.
                </li>
                <li>
                  <strong>Your Explicit Consent:</strong> By accepting this
                  Privacy Policy and using cloud synchronization features, you
                  provide explicit consent for the transfer of your data,
                  including special categories of personal data (health data),
                  to countries outside your jurisdiction.
                </li>
              </ul>
              <p>
                We take appropriate safeguards to ensure that your personal
                information remains protected in accordance with this Privacy
                Policy regardless of where it is processed.
              </p>
            </Section>

            <Section title="12. Your Privacy Rights">
              <p>
                You have certain rights regarding your personal information.
                This section explains your rights and how to exercise them.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                12.1 Rights for All Users
              </h3>
              <p>Regardless of your location, you have the following rights:</p>
              <ul>
                <li>
                  <strong>Right to Access:</strong> You can access all personal
                  data we hold about you directly through the App. Navigate to
                  Settings &gt; Privacy &amp; Data to view your stored
                  information.
                </li>
                <li>
                  <strong>Right to Correction:</strong> You can update or
                  correct your personal information at any time through the App
                  interface. Edit symptom logs, update account information, or
                  modify notes and preferences as needed.
                </li>
                <li>
                  <strong>Right to Deletion:</strong> You can delete individual
                  data items (symptom logs, photos, product scans) or delete
                  your entire account and all associated data through Settings
                  &gt; Account &gt; Delete Account.
                </li>
                <li>
                  <strong>Right to Export:</strong> You can export your complete
                  data record as a PDF report delivered to your email through
                  Settings &gt; Privacy &amp; Data &gt; Export My Data. This
                  includes symptom logs, photos, treatments, food logs,
                  product scans, and settings.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Where processing
                  is based on consent, you can withdraw consent at any time.
                  This includes disabling location access, camera access, cloud
                  sync, or AI features in your device or App settings. Note that
                  withdrawing consent may limit App functionality.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                12.2 California Residents (CCPA/CPRA Rights)
              </h3>
              <p>
                If you are a California resident, the California Consumer
                Privacy Act (CCPA) and California Privacy Rights Act (CPRA)
                provide you with specific rights:
              </p>
              <ul>
                <li>
                  <strong>Right to Know:</strong> You have the right to request
                  that we disclose what personal information we collect, use,
                  disclose, and sell about you. You can exercise this right by
                  contacting us at heyo@foresightcomputers.com or using the in-App data
                  export feature.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You have the right to
                  request deletion of your personal information, subject to
                  certain exceptions. Use the Delete Account feature in Settings
                  or contact heyo@foresightcomputers.com.
                </li>
                <li>
                  <strong>Right to Opt-Out of Sale:</strong> We do not sell your
                  personal information as defined by CCPA. We have not sold
                  personal information in the preceding 12 months and do not
                  have actual knowledge of selling personal information of
                  minors under 16 years of age.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> You have the
                  right not to receive discriminatory treatment for exercising
                  your CCPA privacy rights. We will not deny you services,
                  charge different prices, or provide different levels of
                  service for exercising your rights.
                </li>
                <li>
                  <strong>Right to Correct:</strong> You have the right to
                  request correction of inaccurate personal information. You can
                  correct information through the App or by contacting
                  heyo@foresightcomputers.com.
                </li>
                <li>
                  <strong>Right to Limit Use of Sensitive Personal
                  Information:</strong> While we collect sensitive personal
                  information (health data), we only use it for purposes
                  permitted under CCPA without requiring an opt-out option
                  (i.e., to provide services you requested). You can limit
                  collection by not using certain features or by deleting your
                  account.
                </li>
              </ul>
              <p>
                To exercise these rights, email heyo@foresightcomputers.com with the
                subject line &quot;CCPA Privacy Request&quot; or use the in-App
                tools. We will verify your identity before processing your
                request and respond within 45 days.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                12.3 European Economic Area Residents (GDPR Rights)
              </h3>
              <p>
                If you are located in the European Economic Area, United
                Kingdom, or Switzerland, you have the following rights under the
                General Data Protection Regulation (GDPR):
              </p>
              <ul>
                <li>
                  <strong>Right of Access:</strong> You have the right to obtain
                  confirmation as to whether or not your personal data is being
                  processed, and to access that data. Use the in-App data viewer
                  or request a copy by emailing heyo@foresightcomputers.com.
                </li>
                <li>
                  <strong>Right to Rectification:</strong> You have the right to
                  obtain rectification of inaccurate personal data and to have
                  incomplete data completed. Update your information through the
                  App or contact us for assistance.
                </li>
                <li>
                  <strong>Right to Erasure (Right to be Forgotten):</strong> You
                  have the right to obtain erasure of your personal data in
                  certain circumstances, including where the data is no longer
                  necessary, you withdraw consent, or you object to processing.
                  Use the Delete Account feature or contact heyo@foresightcomputers.com.
                </li>
                <li>
                  <strong>Right to Restriction of Processing:</strong> You have
                  the right to restrict processing of your personal data in
                  certain circumstances, such as when you contest the accuracy
                  of the data or object to processing. Contact heyo@foresightcomputers.com
                  to request restrictions.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You have the right
                  to receive your personal data in a structured format. Use the
                  Export My Data feature in Settings to receive a comprehensive
                  PDF report of your data delivered to your email.
                </li>
                <li>
                  <strong>Right to Object:</strong> You have the right to object
                  to processing of your personal data where we rely on
                  legitimate interests. You can disable specific features, turn
                  off analytics, or delete your account to object to processing.
                </li>
                <li>
                  <strong>Right to Withdraw Consent:</strong> Where processing
                  is based on consent, you have the right to withdraw consent at
                  any time. This does not affect the lawfulness of processing
                  based on consent before withdrawal.
                </li>
                <li>
                  <strong>Right to Lodge a Complaint:</strong> You have the
                  right to lodge a complaint with a supervisory authority,
                  particularly in the EU member state of your habitual
                  residence, place of work, or place of the alleged
                  infringement. A list of supervisory authorities is available
                  at https://edpb.europa.eu/about-edpb/board/members_en.
                </li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at
                heyo@foresightcomputers.com with the subject line &quot;GDPR Privacy
                Request&quot; and specify which right you wish to exercise. We
                will respond to your request within one month, though this may
                be extended by two additional months in complex cases.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                12.4 How to Exercise Your Rights
              </h3>
              <p>
                You can exercise most privacy rights directly through the App:
              </p>
              <ul>
                <li>
                  <strong>In-App Tools:</strong> Settings &gt; Privacy &amp;
                  Data provides options to view, export, and delete your data.
                </li>
                <li>
                  <strong>Email Requests:</strong> For requests that cannot be
                  completed through the App, email heyo@foresightcomputers.com with your
                  request. Include your account email and specify which right
                  you wish to exercise.
                </li>
                <li>
                  <strong>Verification:</strong> For security purposes, we may
                  need to verify your identity before processing certain
                  requests. We will request information necessary to confirm you
                  are the account holder.
                </li>
                <li>
                  <strong>Response Time:</strong> We will respond to your
                  requests within the timeframes required by applicable law (45
                  days for CCPA requests, 30 days for GDPR requests).
                </li>
                <li>
                  <strong>No Fee:</strong> We do not charge a fee to process
                  privacy requests unless they are manifestly unfounded,
                  excessive, or repetitive.
                </li>
              </ul>
            </Section>

            <Section title="13. Children's Privacy">
              <p>
                Eczemate is not intended for use by children. We are committed to
                protecting the privacy of children and complying with applicable
                children&apos;s privacy laws.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                13.1 Age Requirements
              </h3>
              <ul>
                <li>
                  <strong>United States and Other Jurisdictions:</strong> The
                  App is not intended for children under 13 years of age. We do
                  not knowingly collect personal information from children under
                  13 in compliance with the Children&apos;s Online Privacy
                  Protection Act (COPPA).
                </li>
                <li>
                  <strong>European Economic Area:</strong> For users in the EEA,
                  the App is not intended for children under 16 years of age
                  without parental consent, in accordance with GDPR requirements.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                13.2 Parental Consent
              </h3>
              <p>
                If you are a parent or guardian and wish to allow your child
                (who meets the minimum age requirements) to use Eczemate, you are
                responsible for:
              </p>
              <ul>
                <li>
                  Providing consent for your child to use the App and create an
                  account
                </li>
                <li>
                  Understanding that health data entered into the App is
                  sensitive and should be monitored
                </li>
                <li>
                  Reviewing this Privacy Policy and explaining it to your child
                  as appropriate
                </li>
                <li>
                  Supervising your child&apos;s use of the App, particularly
                  camera and photo features
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                13.3 If We Learn We Have Collected Children&apos;s Data
              </h3>
              <p>
                If we become aware that we have collected personal information
                from a child under the applicable minimum age without
                appropriate parental consent, we will take steps to delete that
                information as quickly as possible.
              </p>
              <p>
                If you believe we might have information from or about a child
                under the minimum age, please contact us immediately at
                heyo@foresightcomputers.com with the subject line &quot;Child Privacy
                Concern.&quot;
              </p>
            </Section>

            <Section title="14. Do Not Track Signals">
              <p>
                Some web browsers and mobile devices have a &quot;Do Not
                Track&quot; (DNT) feature that lets you tell websites and apps
                that you do not want to have your online activities tracked.
              </p>
              <p>
                Currently, there is no universally accepted standard for how to
                respond to DNT signals in mobile applications. As such, the App
                does not respond to DNT signals or similar mechanisms at this
                time.
              </p>
              <p>
                However, you can control data collection through the App in the
                following ways:
              </p>
              <ul>
                <li>
                  Disable cloud synchronization to keep data only on your device
                </li>
                <li>
                  Disable location services to prevent collection of location
                  data
                </li>
                <li>Choose not to use AI analysis features</li>
                <li>
                  Use an anonymous/guest account instead of signing in with
                  Apple Sign In
                </li>
                <li>
                  Control camera and photo access through device settings
                </li>
              </ul>
              <p>
                If a standard for responding to DNT signals is established in
                the future that applies to mobile applications, we will assess
                our practices and update this Privacy Policy accordingly.
              </p>
            </Section>

            <Section title="15. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors. When we make changes, we will update the
                &quot;Effective Date&quot; at the top of this Privacy Policy.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                15.1 How We Notify You of Changes
              </h3>
              <ul>
                <li>
                  <strong>Material Changes:</strong> If we make material changes
                  that significantly affect your privacy rights or how we handle
                  your personal information, we will notify you through one or
                  more of the following methods: (a) a prominent notice within
                  the App, (b) a push notification, (c) an email to the address
                  associated with your account, or (d) other conspicuous means.
                </li>
                <li>
                  <strong>Non-Material Changes:</strong> For minor changes, such
                  as clarifications or formatting updates that do not
                  substantively change your rights, we may simply update the
                  Privacy Policy and post the new effective date.
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                15.2 Your Acceptance of Changes
              </h3>
              <p>
                Your continued use of the App after the effective date of an
                updated Privacy Policy constitutes your acceptance of the
                revised policy. If you do not agree with the updated Privacy
                Policy, you should discontinue use of the App and may delete
                your account.
              </p>
              <p>
                For changes that require consent under applicable law (such as
                new uses of health data or expansion of third-party sharing), we
                will obtain your explicit opt-in consent before applying those
                changes to your existing data.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                15.3 Review Regularly
              </h3>
              <p>
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your information. You can
                always access the current Privacy Policy through the App
                (Settings &gt; Legal &gt; Privacy Policy) or on our website.
              </p>
            </Section>

            <Section title="16. Contact Us">
              <p>
                If you have questions, concerns, or requests regarding this
                Privacy Policy or our data practices, we want to hear from you.
                Please contact us using the information below:
              </p>
              <p>
                <strong>Email:</strong> heyo@foresightcomputers.com
              </p>
              <p>
                <strong>Subject Line Guidelines:</strong> To help us route your
                inquiry appropriately, please use one of the following subject
                lines:
              </p>
              <ul>
                <li>
                  &quot;Privacy Question&quot; - General privacy inquiries
                </li>
                <li>
                  &quot;GDPR Privacy Request&quot; - For EEA residents exercising
                  GDPR rights
                </li>
                <li>
                  &quot;CCPA Privacy Request&quot; - For California residents
                  exercising CCPA rights
                </li>
                <li>
                  &quot;Data Deletion Request&quot; - To request account and
                  data deletion
                </li>
                <li>
                  &quot;Data Export Request&quot; - To request a copy of your
                  data
                </li>
                <li>
                  &quot;Child Privacy Concern&quot; - If you believe we have
                  collected data from a child
                </li>
                <li>
                  &quot;Security Concern&quot; - To report a security
                  vulnerability or data breach concern
                </li>
              </ul>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                Response Time
              </h3>
              <p>
                We strive to respond to all privacy-related inquiries within 5
                business days. For formal privacy rights requests (GDPR, CCPA),
                we will acknowledge receipt within 5 business days and provide a
                substantive response within the timeframes required by law (30
                days for GDPR, 45 days for CCPA).
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                Data Protection Officer
              </h3>
              <p>
                While we are not currently required to designate a Data
                Protection Officer under GDPR, all privacy inquiries are handled
                by our privacy team with the same level of attention and
                expertise. For EEA-specific matters, please include &quot;ATTN:
                GDPR Compliance&quot; in your email.
              </p>

              <h3 className="font-semibold text-sage-900 mt-6 mb-3">
                Additional Resources
              </h3>
              <p>
                For more information about Eczemate, please visit:
              </p>
              <ul>
                <li>
                  <strong>Terms of Service:</strong> Available in Settings &gt;
                  Legal &gt; Terms of Service or on our website
                </li>
                <li>
                  <strong>Help Center:</strong> In-App help and FAQs in Settings
                  &gt; Help &amp; Support
                </li>
                <li>
                  <strong>Security Information:</strong> For information about
                  our security practices, email heyo@foresightcomputers.com with subject
                  &quot;Security Inquiry&quot;
                </li>
              </ul>

              <p className="mt-6">
                <strong>Thank you for trusting Eczemate with your health data.</strong> We
                are committed to transparency, security, and putting your
                privacy first.
              </p>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pb-6 border-b border-border/60 last:border-0">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-sage-950 mb-4">
        {title}
      </h2>
      <div className="text-sage-700 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-sage-700 [&_strong]:text-sage-800 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
