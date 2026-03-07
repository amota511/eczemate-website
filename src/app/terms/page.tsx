import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — Eczemate",
  description: "Eczemate's terms of use. Please read before using the app.",
};

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-sage-950 mb-4">
            Terms of Use
          </h1>
          <p className="text-sage-500 text-sm mb-12">
            Last updated: January 31, 2026
          </p>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p>
                Welcome to Eczemate. These Terms of Use (the &quot;Terms&quot;)
                constitute a legally binding agreement between you and Eczemate
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing
                your access to and use of the Eczemate mobile application (the
                &quot;App&quot;), including any content, functionality, and
                services offered on or through the App.
              </p>
              <p>
                By downloading, installing, accessing, or using the App, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms and our Privacy Policy, which is
                incorporated herein by reference. If you do not agree to these
                Terms, you must not access or use the App.
              </p>
              <p>
                <strong>These Terms are effective as of January 31, 2026.</strong>
              </p>
              <p>
                <strong>Age Requirement:</strong> You must be at least 13 years
                of age to use the App. If you are between the ages of 13 and
                18, or the age of majority in your jurisdiction, you represent
                that you have reviewed these Terms with your parent or legal
                guardian and that they have agreed to these Terms on your
                behalf. If you are under 13 years of age, you may not use the
                App under any circumstances. If you are located in the European
                Economic Area (EEA), you must be at least 16 years of age to
                use the App.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                Eczemate is an eczema management application designed to help users
                track and manage their eczema condition. The App is available
                on both iOS (Apple App Store) and Android (Google Play Store)
                platforms.
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul>
                <li>
                  <strong>Symptom Tracking:</strong> Record and monitor daily
                  eczema symptoms, severity, and affected body areas
                </li>
                <li>
                  <strong>Flare-Up Prediction:</strong> Rule-based analysis to
                  estimate the likelihood of eczema flare-ups based on
                  environmental factors (weather, humidity, air quality) and
                  your recent symptom trends
                </li>
                <li>
                  <strong>Product Scanning:</strong> Scan product barcodes to
                  analyze ingredients and identify potential eczema triggers or
                  irritants
                </li>
                <li>
                  <strong>Food Analysis:</strong> Analyze food items to
                  identify potential dietary triggers
                </li>
                <li>
                  <strong>Skin Photo Tracking:</strong> Upload and store photos
                  of your skin with AI-powered analysis to track changes over
                  time
                </li>
                <li>
                  <strong>Treatment &amp; Routine Tracking:</strong> Create and
                  manage daily skincare routines with medications, products,
                  and notes, track adherence, and set morning and night
                  reminders
                </li>
                <li>
                  <strong>Educational Content:</strong> Access articles,
                  resources, and information about eczema management
                </li>
              </ul>
              <p>
                <strong>Service Tiers:</strong>
              </p>
              <p>
                The App operates on a freemium model with two service tiers:
              </p>
              <ul>
                <li>
                  <strong>Free Tier:</strong> Symptom tracking, flare-up
                  predictions, routine and treatment tracking, product
                  scanning, and limited AI-powered analyses
                </li>
                <li>
                  <strong>Eczemate Pro (Premium Subscription):</strong> Everything
                  in the free tier plus unlimited AI-powered analyses for
                  skin photos, product ingredients, and food items
                </li>
              </ul>
            </Section>

            <Section title="3. Medical Disclaimer">
              <p>
                <strong className="text-lg">
                  PLEASE READ THIS SECTION CAREFULLY. IT CONTAINS IMPORTANT
                  INFORMATION ABOUT THE NATURE OF THE APP AND ITS LIMITATIONS.
                </strong>
              </p>
              <p>
                <strong>
                  ECZEMATE IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL
                  ADVICE, DIAGNOSIS, OR TREATMENT.
                </strong>
              </p>
              <p>
                The App is designed as an informational and self-management
                tool only. It is NOT intended to be used for medical diagnosis,
                treatment, or professional medical advice. The App has NOT been
                evaluated, cleared, or approved by the U.S. Food and Drug
                Administration (FDA) or any other regulatory health authority
                as a medical device. The App is NOT covered under the Health
                Insurance Portability and Accountability Act (HIPAA) and should
                not be relied upon as a HIPAA-compliant service.
              </p>
              <p>
                <strong>No Clinical Validation:</strong> The flare-up
                predictions, risk assessments, and probability estimates
                provided by the App are algorithmic calculations based on
                patterns in your self-reported data and are NOT clinically
                validated or guaranteed to be accurate. These predictions are
                estimates only and should not be used as the sole basis for
                medical decisions.
              </p>
              <p>
                <strong>Product and Food Scanning Limitations:</strong> The
                product scanning and food analysis features provide
                informational content only about ingredients and potential
                triggers. This information is not comprehensive, may not be
                current, and should not replace consultation with a healthcare
                provider, allergist, or dermatologist. Not all ingredients or
                allergens may be detected or flagged by the App.
              </p>
              <p>
                <strong>AI Analysis Limitations:</strong> The AI-powered skin
                photo analysis is a computational tool that provides automated
                observations and is NOT a substitute for professional
                dermatological examination. AI analysis may produce inaccurate,
                incomplete, or misleading results. Only a qualified healthcare
                provider can provide a proper medical evaluation of your skin
                condition.
              </p>
              <p>
                <strong>Educational Content:</strong> All articles, tips,
                recommendations, and educational content within the App are for
                general informational purposes only and are not tailored to
                your specific medical circumstances. This content should not be
                interpreted as medical advice or recommendations.
              </p>
              <p>
                <strong>Always Consult Your Healthcare Provider:</strong> You
                should ALWAYS consult with a qualified healthcare provider,
                dermatologist, or allergist before:
              </p>
              <ul>
                <li>Making any medical decisions</li>
                <li>Starting, stopping, or changing any treatment plan</li>
                <li>Changing your diet or lifestyle based on App suggestions</li>
                <li>
                  Using any products identified through the product scanning
                  feature
                </li>
                <li>
                  Interpreting any predictions, analysis, or recommendations
                  from the App
                </li>
              </ul>
              <p>
                <strong>Do Not Delay Medical Care:</strong> Do not disregard,
                avoid, or delay seeking professional medical advice,
                examination, diagnosis, or treatment because of any information
                you have read, seen, or obtained through the App. If you have
                or suspect you have a medical problem or condition, contact a
                qualified healthcare provider immediately.
              </p>
              <p>
                <strong>Emergency Situations:</strong> THE APP MUST NOT BE USED
                FOR EMERGENCY MEDICAL SITUATIONS. If you are experiencing a
                medical emergency, including but not limited to severe allergic
                reactions, difficulty breathing, severe skin infections, or
                other urgent medical conditions, call emergency services (911
                in the United States) or go to the nearest emergency room
                immediately. DO NOT rely on the App for emergency medical
                guidance.
              </p>
              <p>
                <strong>Individual Results May Vary:</strong> Every individual
                is different. What works for one person may not work for
                another. The App cannot account for all individual medical
                circumstances, conditions, allergies, sensitivities, or other
                health factors that may affect your eczema or overall health.
              </p>
              <p>
                <strong>Accuracy Not Guaranteed:</strong> While we strive to
                provide accurate information, we make no warranties or
                guarantees regarding the accuracy, completeness, timeliness, or
                reliability of any content, predictions, analysis, or
                recommendations provided through the App.
              </p>
              <p>
                <strong>Your Responsibility:</strong> You are solely
                responsible for your health and medical decisions. Your use of
                the App and reliance on any information provided by it is at
                your own risk.
              </p>
            </Section>

            <Section title="4. Account Registration and Security">
              <p>
                To access certain features of the App, you may be required to
                create an account. The App supports multiple account creation
                methods:
              </p>
              <ul>
                <li>
                  <strong>Apple Sign In:</strong> Authentication through your
                  Apple ID (iOS devices)
                </li>
                <li>
                  <strong>Guest/Anonymous Accounts:</strong> Limited
                  functionality without full registration
                </li>
              </ul>
              <p>
                <strong>Account Requirements:</strong>
              </p>
              <ul>
                <li>
                  You must provide accurate, current, and complete information
                  during the registration process
                </li>
                <li>
                  You must maintain and promptly update your account
                  information to keep it accurate, current, and complete
                </li>
                <li>
                  You may only create and maintain one account per person
                </li>
                <li>
                  You may not create an account using false or misleading
                  information or on behalf of someone other than yourself
                  without permission
                </li>
              </ul>
              <p>
                <strong>Account Security:</strong>
              </p>
              <p>
                You are responsible for maintaining the confidentiality and
                security of your account credentials, including your password
                or authentication tokens. You are fully responsible for all
                activities that occur under your account, whether or not
                authorized by you. You agree to:
              </p>
              <ul>
                <li>
                  Immediately notify us of any unauthorized use of your account
                  or any other breach of security
                </li>
                <li>
                  Ensure that you log out from your account at the end of each
                  session when using shared or public devices
                </li>
                <li>Not share your account credentials with any third party</li>
                <li>
                  Not allow any third party to access your account or use your
                  credentials
                </li>
              </ul>
              <p>
                We cannot and will not be liable for any loss or damage arising
                from your failure to maintain account security. You may be held
                liable for losses incurred by us or any other user of the App
                due to unauthorized use of your account.
              </p>
              <p>
                <strong>Guest Accounts:</strong> If you choose to use the App
                as a guest without creating a full account, you may have
                limited access to certain features, and your data may not be
                backed up or recoverable if you delete the App or switch
                devices.
              </p>
            </Section>

            <Section title="5. Subscriptions and Billing">
              <p>
                Eczemate Pro is a premium subscription service that provides
                access to additional features beyond the free tier. All
                subscriptions are processed through the Apple App Store (for
                iOS) or Google Play Store (for Android), and are subject to the
                terms and policies of these platforms in addition to these
                Terms.
              </p>
              <p>
                <strong>Subscription Plans:</strong>
              </p>
              <p>
                Eczemate Pro is available in the following subscription durations:
              </p>
              <ul>
                <li>Monthly subscription (auto-renewable)</li>
                <li>Yearly subscription (auto-renewable)</li>
              </ul>
              <p>
                Current pricing is displayed in the App and in the respective
                app store. Prices may vary by region and are subject to
                applicable taxes.
              </p>
              <p>
                <strong>Free Trial:</strong>
              </p>
              <p>
                New subscribers to Eczemate Pro are eligible for a 3-day free
                trial. During the trial period, you will have full access to
                all Eczemate Pro features at no charge. Important trial terms:
              </p>
              <ul>
                <li>
                  The free trial is available to new subscribers only (users
                  who have not previously subscribed to Eczemate Pro)
                </li>
                <li>
                  You must provide valid payment information to start the free
                  trial
                </li>
                <li>
                  At the end of the 3-day trial period, your subscription will
                  AUTOMATICALLY convert to a paid subscription and you will be
                  charged the then-current subscription price unless you cancel
                  before the trial ends
                </li>
                <li>
                  To avoid being charged, you must cancel your subscription at
                  least 24 hours before the end of the trial period through
                  your app store account settings
                </li>
              </ul>
              <p>
                <strong>Auto-Renewal:</strong>
              </p>
              <p>
                All subscriptions are AUTO-RENEWABLE. This means your
                subscription will automatically renew at the end of each
                billing period (monthly or yearly) unless you cancel it before
                the renewal date. You will be charged the then-current
                subscription price for each renewal period.
              </p>
              <p>
                Your subscription will automatically renew 24 hours before the
                end of the current period, and your app store account will be
                charged at that time.
              </p>
              <p>
                <strong>Payment:</strong>
              </p>
              <ul>
                <li>
                  All payments are processed through your Apple App Store
                  account (iOS) or Google Play Store account (Android)
                </li>
                <li>
                  You will be charged through the payment method associated
                  with your app store account
                </li>
                <li>
                  Payment will be charged to your app store account at
                  confirmation of purchase (or at the end of any free trial
                  period)
                </li>
                <li>
                  We do not have access to your payment information; all
                  billing is managed by Apple or Google
                </li>
              </ul>
              <p>
                <strong>Price Changes:</strong>
              </p>
              <p>
                We reserve the right to change subscription pricing at any
                time. Price changes will take effect at the start of the next
                subscription period following notice of the price change. We
                will provide reasonable advance notice of any price increases.
                Your continued use of Eczemate Pro after a price change
                constitutes your agreement to pay the modified price.
              </p>
              <p>
                <strong>Managing and Canceling Your Subscription:</strong>
              </p>
              <p>
                You may cancel your subscription at any time. However,
                cancellation must be done through your app store account
                settings, NOT through the Eczemate App itself.
              </p>
              <p>
                <strong>For iOS (Apple App Store):</strong>
              </p>
              <ul>
                <li>Open the Settings app on your device</li>
                <li>Tap your name at the top</li>
                <li>Tap Subscriptions</li>
                <li>Tap the Eczemate Pro subscription</li>
                <li>Tap Cancel Subscription</li>
              </ul>
              <p>
                <strong>For Android (Google Play Store):</strong>
              </p>
              <ul>
                <li>Open the Google Play Store app</li>
                <li>Tap your profile icon</li>
                <li>Tap Payments &amp; subscriptions &gt; Subscriptions</li>
                <li>Select the Eczemate Pro subscription</li>
                <li>Tap Cancel subscription</li>
              </ul>
              <p>
                <strong>Cancellation Timing:</strong> To avoid being charged
                for the next billing period, you must cancel your subscription
                at least 24 hours before the renewal date.
              </p>
              <p>
                <strong>Effect of Cancellation:</strong> If you cancel your
                subscription, you will retain access to Eczemate Pro features
                until the end of your current billing period. After that, your
                account will revert to the free tier and you will lose access
                to premium features. No partial refunds will be provided for
                the unused portion of a billing period.
              </p>
              <p>
                <strong>Refunds:</strong>
              </p>
              <p>
                All subscription charges are FINAL and NON-REFUNDABLE except as
                required by law or as determined by Apple or Google in their
                sole discretion. We do not provide refunds or credits for:
              </p>
              <ul>
                <li>Partial subscription periods</li>
                <li>Unused subscription time when you cancel</li>
                <li>
                  Subscriptions that auto-renewed when you forgot to cancel
                </li>
                <li>Dissatisfaction with the service</li>
              </ul>
              <p>
                If you believe you were charged in error, please contact Apple
                Support or Google Play Support, as all billing is managed by
                these platforms. Refund policies are governed by the Apple App
                Store Terms of Service or Google Play Terms of Service, as
                applicable.
              </p>
              <p>
                <strong>App Store Terms:</strong>
              </p>
              <p>
                Your subscription is subject to the app store&apos;s terms and
                conditions:
              </p>
              <ul>
                <li>
                  iOS: Apple Media Services Terms and Conditions
                  (https://www.apple.com/legal/internet-services/itunes/)
                </li>
                <li>
                  Android: Google Play Terms of Service
                  (https://play.google.com/about/play-terms/)
                </li>
              </ul>
            </Section>

            <Section title="6. User Content and Data">
              <p>
                The App allows you to create, upload, store, and share various
                types of content, including but not limited to:
              </p>
              <ul>
                <li>Symptom logs and health data entries</li>
                <li>Photographs of your skin</li>
                <li>Product scan history</li>
                <li>Food logs and dietary information</li>
                <li>Treatments and skincare routine data</li>
                <li>Routine adherence and completion history</li>
                <li>
                  Any other information or content you provide (collectively,
                  &quot;User Content&quot;)
                </li>
              </ul>
              <p>
                <strong>Ownership:</strong>
              </p>
              <p>
                You retain all ownership rights to your User Content. We do not
                claim any ownership rights to your personal health data, photos,
                logs, or other content you submit to the App.
              </p>
              <p>
                <strong>License Grant:</strong>
              </p>
              <p>
                By submitting User Content to the App, you grant us a limited,
                non-exclusive, royalty-free, worldwide license to use, store,
                process, and display your User Content solely for the purposes
                of:
              </p>
              <ul>
                <li>Providing the App&apos;s services to you</li>
                <li>
                  Processing your data through our systems and third-party
                  services (such as AI analysis providers)
                </li>
                <li>Improving and developing the App&apos;s features</li>
                <li>
                  Backing up and securing your data to prevent loss
                </li>
                <li>Complying with legal obligations</li>
              </ul>
              <p>
                This license terminates when you delete your User Content or
                close your account, except for content that has been shared
                with others or that we are required to retain for legal or
                operational purposes.
              </p>
              <p>
                <strong>No Use for Advertising:</strong>
              </p>
              <p>
                We will NOT use your personal health data, symptom logs, or
                skin photos for advertising or marketing purposes. We will not
                sell your personal health information to third parties.
              </p>
              <p>
                <strong>Accuracy and Responsibility:</strong>
              </p>
              <p>
                You are solely responsible for the accuracy, completeness, and
                quality of your User Content. The App&apos;s predictions,
                analysis, and recommendations are only as accurate as the data
                you provide. Inaccurate or incomplete data may result in
                inaccurate analysis and predictions.
              </p>
              <p>
                <strong>Prohibited Content:</strong>
              </p>
              <p>You agree not to submit User Content that:</p>
              <ul>
                <li>
                  Belongs to another person or violates another person&apos;s
                  rights
                </li>
                <li>Contains personally identifiable information of others</li>
                <li>
                  Is illegal, harmful, threatening, abusive, harassing,
                  defamatory, or otherwise objectionable
                </li>
                <li>
                  Contains viruses, malware, or other harmful code
                </li>
              </ul>
              <p>
                <strong>Data Deletion:</strong>
              </p>
              <p>
                You may delete your User Content at any time through the
                App&apos;s settings. When you delete content, we will remove it
                from active systems, but copies may persist in backups for a
                limited period. Please see our Privacy Policy for more details
                on data retention and deletion.
              </p>
            </Section>

            <Section title="7. AI-Powered Features">
              <p>
                The App utilizes artificial intelligence (AI) and machine
                learning technologies to provide certain features, including
                but not limited to skin photo analysis, flare-up predictions,
                and personalized insights. These AI features are powered by
                third-party AI service providers, including OpenAI.
              </p>
              <p>
                <strong>Third-Party AI Processing:</strong>
              </p>
              <p>
                When you use AI-powered features, your data (including photos,
                symptom descriptions, and other information) may be transmitted
                to and processed by third-party AI service providers. We use
                industry-standard security measures to protect your data during
                transmission and processing, but we cannot guarantee the
                security practices of third-party providers.
              </p>
              <p>
                <strong>Probabilistic Nature of AI:</strong>
              </p>
              <p>
                AI analysis is inherently probabilistic and predictive, not
                definitive or diagnostic. AI-generated results, including:
              </p>
              <ul>
                <li>Skin condition observations and descriptions</li>
                <li>Flare-up risk assessments and predictions</li>
                <li>Trigger identification and recommendations</li>
                <li>Severity assessments</li>
                <li>Pattern recognition and insights</li>
              </ul>
              <p>
                are computational estimations based on algorithms and training
                data, and they:
              </p>
              <ul>
                <li>May contain errors, inaccuracies, or biases</li>
                <li>
                  May not account for all relevant factors in your individual
                  situation
                </li>
                <li>
                  Are NOT equivalent to professional medical evaluation or
                  diagnosis
                </li>
                <li>Should not be used as the sole basis for medical decisions</li>
                <li>
                  May produce different results for the same input at different
                  times
                </li>
              </ul>
              <p>
                <strong>Not a Substitute for Professional Advice:</strong>
              </p>
              <p>
                AI-powered features are tools to help you track and understand
                patterns in your condition, but they are NOT a substitute for
                professional medical advice, examination, diagnosis, or
                treatment. Only a qualified healthcare provider can provide
                proper medical evaluation and guidance.
              </p>
              <p>
                <strong>Photo Analysis Limitations:</strong>
              </p>
              <p>
                AI analysis of skin photos has significant limitations. Photo
                quality, lighting, camera angle, and other factors can affect
                the accuracy of AI analysis. The AI cannot:
              </p>
              <ul>
                <li>
                  Diagnose medical conditions or differentiate between eczema
                  and other skin conditions
                </li>
                <li>
                  Detect all skin abnormalities or identify serious conditions
                  that require immediate medical attention
                </li>
                <li>
                  Replace physical examination by a dermatologist
                </li>
                <li>
                  Account for factors not visible in photos (such as itch
                  level, pain, or underlying health conditions)
                </li>
              </ul>
              <p>
                <strong>Prediction Limitations:</strong>
              </p>
              <p>
                Flare-up predictions are statistical estimates based on
                historical patterns in your data and are not guaranteed to be
                accurate. Many factors that influence eczema flare-ups may not
                be tracked or accounted for by the App. A low predicted risk
                does not mean a flare-up will not occur, and a high predicted
                risk does not guarantee a flare-up will occur.
              </p>
              <p>
                <strong>No Guarantee of Accuracy:</strong>
              </p>
              <p>
                We make no warranties or representations regarding the
                accuracy, reliability, completeness, or timeliness of any
                AI-generated content, analysis, predictions, or
                recommendations. Use of AI features is at your own risk.
              </p>
              <p>
                <strong>Changes to AI Features:</strong>
              </p>
              <p>
                We may update, modify, or discontinue AI features at any time
                without notice. AI models may be retrained or updated, which
                could result in different analysis or predictions compared to
                previous versions.
              </p>
            </Section>

            <Section title="8. Acceptable Use Policy">
              <p>
                You agree to use the App only for lawful purposes and in
                accordance with these Terms. You agree NOT to:
              </p>
              <ul>
                <li>
                  <strong>Violate Laws:</strong> Use the App in any way that
                  violates any applicable federal, state, local, or
                  international law or regulation
                </li>
                <li>
                  <strong>Infringe Rights:</strong> Use the App in any manner
                  that infringes upon the intellectual property rights, privacy
                  rights, or other rights of Eczemate or any third party
                </li>
                <li>
                  <strong>Harm or Exploit Minors:</strong> Use the App to harm,
                  exploit, or attempt to exploit minors in any way
                </li>
                <li>
                  <strong>Transmit Harmful Code:</strong> Upload, transmit, or
                  introduce any viruses, malware, trojan horses, worms, logic
                  bombs, or other malicious or technologically harmful material
                </li>
                <li>
                  <strong>Unauthorized Access:</strong> Attempt to gain
                  unauthorized access to any portion of the App, other user
                  accounts, or any systems or networks connected to the App
                </li>
                <li>
                  <strong>Reverse Engineering:</strong> Reverse engineer,
                  decompile, disassemble, or otherwise attempt to discover the
                  source code or underlying algorithms of the App
                </li>
                <li>
                  <strong>Circumvent Security:</strong> Bypass, circumvent, or
                  attempt to bypass or circumvent any security measures,
                  authentication measures, or access controls of the App
                </li>
                <li>
                  <strong>Interfere with Operation:</strong> Interfere with,
                  disrupt, or create an undue burden on the App, servers, or
                  networks connected to the App
                </li>
                <li>
                  <strong>Scraping or Automation:</strong> Use any robot,
                  spider, scraper, or other automated means to access the App
                  for any purpose without our express written permission
                </li>
                <li>
                  <strong>Multiple Accounts:</strong> Create or use multiple
                  accounts to circumvent limitations or restrictions on the App
                </li>
                <li>
                  <strong>Share Credentials:</strong> Share your account
                  credentials, allow another person to use your account, or
                  provide access to the App to any third party
                </li>
                <li>
                  <strong>Commercial Use:</strong> Use the App for any
                  commercial purpose not expressly approved by us in writing
                </li>
                <li>
                  <strong>Data Mining:</strong> Use the App to collect
                  information about other users without their express consent
                </li>
                <li>
                  <strong>Impersonation:</strong> Impersonate or misrepresent
                  your affiliation with any person or entity
                </li>
                <li>
                  <strong>False Information:</strong> Provide false, inaccurate,
                  or misleading information when creating your account or using
                  the App
                </li>
                <li>
                  <strong>Spam or Abuse:</strong> Use the App to send spam,
                  unsolicited communications, or engage in any form of
                  harassment or abuse
                </li>
                <li>
                  <strong>Remove Notices:</strong> Remove, obscure, or alter
                  any copyright, trademark, or other proprietary rights notices
                  from the App
                </li>
                <li>
                  <strong>Derivative Works:</strong> Create derivative works
                  based on the App or its content without our prior written
                  consent
                </li>
              </ul>
              <p>
                Violation of this Acceptable Use Policy may result in immediate
                termination of your account and access to the App, and we may
                report violations to appropriate law enforcement authorities.
              </p>
            </Section>

            <Section title="9. Intellectual Property Rights">
              <p>
                <strong>Ownership:</strong>
              </p>
              <p>
                The App and its entire contents, features, functionality, and
                design (including but not limited to all information, software,
                code, text, displays, graphics, photographs, images, video,
                audio, algorithms, user interface, visual interface, interactive
                features, and the design, selection, and arrangement thereof)
                are owned by Eczemate, our licensors, or other providers of such
                material and are protected by United States and international
                copyright, trademark, patent, trade secret, and other
                intellectual property or proprietary rights laws.
              </p>
              <p>
                <strong>Trademarks:</strong>
              </p>
              <p>
                The Eczemate name, logo, and all related names, logos, product and
                service names, designs, and slogans are trademarks of Eczemate or
                its affiliates or licensors. You may not use such marks without
                our prior written permission. All other names, logos, product
                and service names, designs, and slogans mentioned in the App
                are the trademarks of their respective owners.
              </p>
              <p>
                <strong>Limited License:</strong>
              </p>
              <p>
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, non-sublicensable,
                revocable license to access and use the App for your personal,
                non-commercial use only. This license does not include any
                right to:
              </p>
              <ul>
                <li>Modify, copy, or create derivative works of the App</li>
                <li>
                  Distribute, sell, lease, rent, lend, or sublicense the App
                </li>
                <li>
                  Reverse engineer, decompile, or disassemble the App
                </li>
                <li>
                  Extract or attempt to extract the source code of the App
                </li>
                <li>
                  Use the App for any commercial purpose or for the benefit of
                  any third party
                </li>
              </ul>
              <p>
                <strong>Restrictions:</strong>
              </p>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell, or
                exploit any portion of the App, use of the App, or access to
                the App without our express written permission.
              </p>
              <p>
                <strong>Feedback:</strong>
              </p>
              <p>
                If you provide us with any feedback, suggestions, or ideas
                about the App (&quot;Feedback&quot;), you grant us a perpetual,
                irrevocable, worldwide, royalty-free license to use, modify,
                and incorporate such Feedback into our products and services
                without any obligation to compensate you or provide attribution.
              </p>
              <p>
                <strong>Copyright Infringement:</strong>
              </p>
              <p>
                If you believe that any content in the App infringes your
                copyright, please contact us at heyo@foresightcomputers.com with details
                of the alleged infringement.
              </p>
            </Section>

            <Section title="10. Privacy and Data Protection">
              <p>
                Your privacy is important to us. Our collection, use, and
                disclosure of your personal information, including health data,
                is governed by our Privacy Policy, which is incorporated into
                these Terms by reference.
              </p>
              <p>
                By using the App, you consent to the collection, use, and
                disclosure of your information as described in our Privacy
                Policy. We encourage you to read our Privacy Policy carefully
                to understand how we handle your data.
              </p>
              <p>
                Key points regarding your data:
              </p>
              <ul>
                <li>
                  We collect health information, symptom data, photos, and
                  usage information
                </li>
                <li>
                  Your data may be processed by third-party service providers,
                  including AI providers and cloud hosting services
                </li>
                <li>
                  We do not sell your personal health information to third
                  parties
                </li>
                <li>
                  We do not use your health data for advertising purposes
                </li>
                <li>
                  You have rights to access, correct, and delete your data as
                  described in the Privacy Policy
                </li>
              </ul>
              <p>
                <strong>Not HIPAA Covered:</strong> As stated in the Medical
                Disclaimer, the App is NOT a HIPAA-covered service. We are not
                a healthcare provider, health plan, or healthcare clearinghouse,
                and your use of the App does not create a doctor-patient
                relationship or trigger HIPAA protections.
              </p>
              <p>
                For complete details about our privacy practices, please review
                our <a href="/privacy" className="underline hover:text-sage-950">Privacy Policy</a>.
              </p>
            </Section>

            <Section title="11. Third-Party Services and Content">
              <p>
                <strong>Third-Party Links:</strong>
              </p>
              <p>
                The App may contain links to third-party websites, services,
                applications, or resources (&quot;Third-Party Services&quot;)
                that are not owned or controlled by Eczemate. These links are
                provided for your convenience only.
              </p>
              <p>
                We have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any Third-Party
                Services. We do not endorse or make any representations about
                Third-Party Services.
              </p>
              <p>
                When you access Third-Party Services, you do so at your own
                risk. You should review the terms and privacy policies of any
                Third-Party Services that you visit.
              </p>
              <p>
                <strong>Third-Party Service Providers:</strong>
              </p>
              <p>
                The App integrates with and relies on various third-party
                service providers to deliver certain features, including:
              </p>
              <ul>
                <li>
                  AI and machine learning services (including OpenAI) for photo
                  analysis and predictions
                </li>
                <li>Cloud hosting and data storage services</li>
                <li>
                  Product database services for barcode scanning functionality
                </li>
                <li>Weather and environmental data providers</li>
                <li>
                  Payment processing through Apple App Store and Google Play
                  Store
                </li>
                <li>Analytics and performance monitoring services</li>
              </ul>
              <p>
                Your data may be transmitted to and processed by these
                third-party providers in accordance with our Privacy Policy and
                their respective privacy policies. We are not responsible for
                the practices of these third parties.
              </p>
              <p>
                <strong>Educational Content:</strong>
              </p>
              <p>
                The App may provide educational articles, tips, and resources
                about eczema and skin health. This content is for general
                informational purposes only and is not medical advice. The
                content:
              </p>
              <ul>
                <li>
                  May be provided by third-party content providers or authors
                </li>
                <li>
                  May not be reviewed or endorsed by medical professionals
                </li>
                <li>
                  May not reflect the most current research or medical guidance
                </li>
                <li>
                  Should not be used as a substitute for professional medical
                  advice
                </li>
              </ul>
              <p>
                We make no warranties regarding the accuracy or completeness of
                any educational content in the App.
              </p>
              <p>
                <strong>Product Information:</strong>
              </p>
              <p>
                Product information obtained through the barcode scanning
                feature is sourced from third-party databases and may be
                incomplete, outdated, or inaccurate. We do not verify the
                accuracy of product ingredient lists or formulations. Always
                check product labels directly and consult with your healthcare
                provider before using new products.
              </p>
            </Section>

            <Section title="12. Disclaimer of Warranties">
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE APP IS
                PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED.
              </p>
              <p>
                ECZEMATE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
                BUT NOT LIMITED TO:
              </p>
              <ul>
                <li>
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT
                </li>
                <li>
                  WARRANTIES THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE,
                  SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS
                </li>
                <li>
                  WARRANTIES REGARDING THE ACCURACY, RELIABILITY, COMPLETENESS,
                  OR TIMELINESS OF ANY CONTENT, INFORMATION, PREDICTIONS,
                  ANALYSIS, OR RECOMMENDATIONS PROVIDED BY THE APP
                </li>
                <li>
                  WARRANTIES THAT THE APP WILL MEET YOUR REQUIREMENTS OR
                  EXPECTATIONS
                </li>
                <li>
                  WARRANTIES THAT DEFECTS OR ERRORS WILL BE CORRECTED
                </li>
                <li>
                  WARRANTIES THAT THE APP OR THE SERVERS THAT MAKE IT AVAILABLE
                  ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS
                </li>
              </ul>
              <p>
                <strong>No Warranty of Accuracy:</strong>
              </p>
              <p>
                We make no warranty that:
              </p>
              <ul>
                <li>
                  Flare-up predictions, risk assessments, or probability
                  estimates will be accurate or reliable
                </li>
                <li>
                  AI analysis of photos will correctly identify skin conditions,
                  severity, or changes
                </li>
                <li>
                  Product scanning will identify all potential triggers or
                  allergens
                </li>
                <li>
                  Educational content is current, complete, or applicable to
                  your specific situation
                </li>
                <li>
                  The App will help you manage your eczema or improve your
                  condition
                </li>
              </ul>
              <p>
                <strong>No Guarantee of Availability:</strong>
              </p>
              <p>
                We do not guarantee that the App will be available at all times
                or that it will be free from interruptions, delays, or errors.
                We may suspend, withdraw, or restrict the availability of all
                or any part of the App for business, operational, or regulatory
                reasons at any time without notice.
              </p>
              <p>
                <strong>Use at Your Own Risk:</strong>
              </p>
              <p>
                Your use of the App, its content, and any services obtained
                through the App is at your own risk. You are solely responsible
                for any damage to your device, loss of data, or any other loss
                that results from your use of the App.
              </p>
              <p>
                <strong>Jurisdictional Variations:</strong>
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain
                warranties or limitations on applicable statutory rights of
                consumers. In such cases, the exclusions and limitations in
                this section apply only to the extent permitted by the laws of
                such jurisdiction.
              </p>
            </Section>

            <Section title="13. Limitation of Liability">
              <p>
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL ECZEMATE, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS,
                EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR:
              </p>
              <ul>
                <li>
                  ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE,
                  OR EXEMPLARY DAMAGES
                </li>
                <li>
                  DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR
                  OTHER INTANGIBLE LOSSES
                </li>
                <li>
                  DAMAGES RESULTING FROM UNAUTHORIZED ACCESS TO OR ALTERATION
                  OF YOUR TRANSMISSIONS OR DATA
                </li>
                <li>
                  DAMAGES RESULTING FROM ANY MEDICAL DECISIONS MADE BASED ON
                  INFORMATION, PREDICTIONS, ANALYSIS, OR RECOMMENDATIONS FROM
                  THE APP
                </li>
                <li>
                  DAMAGES RESULTING FROM YOUR RELIANCE ON ANY CONTENT,
                  PREDICTIONS, OR ANALYSIS PROVIDED BY THE APP
                </li>
                <li>
                  DAMAGES RESULTING FROM ERRORS, INACCURACIES, OR OMISSIONS IN
                  THE APP&apos;S CONTENT OR FUNCTIONALITY
                </li>
                <li>
                  DAMAGES RESULTING FROM INTERRUPTION, SUSPENSION, OR
                  TERMINATION OF THE APP
                </li>
                <li>
                  DAMAGES RESULTING FROM ANY CONDUCT OR CONTENT OF ANY THIRD
                  PARTY USING THE APP
                </li>
                <li>
                  DAMAGES RESULTING FROM UNAUTHORIZED ACCESS, USE, OR
                  ALTERATION OF YOUR CONTENT
                </li>
              </ul>
              <p>
                WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
                NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND
                WHETHER OR NOT ECZEMATE HAS BEEN INFORMED OF THE POSSIBILITY OF
                SUCH DAMAGE.
              </p>
              <p>
                <strong>Cap on Liability:</strong>
              </p>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE TOTAL
                LIABILITY OF ECZEMATE AND ITS AFFILIATES, LICENSORS, SERVICE
                PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, AND DIRECTORS TO YOU
                FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR
                INABILITY TO USE THE APP OR THESE TERMS, WHETHER IN CONTRACT,
                TORT, OR OTHERWISE, SHALL NOT EXCEED THE GREATER OF:
              </p>
              <ul>
                <li>
                  THE TOTAL AMOUNT YOU PAID TO ECZEMATE (VIA THE APP STORES) FOR
                  ECZEMATE PLUS SUBSCRIPTIONS IN THE TWELVE (12) MONTHS PRECEDING
                  THE CLAIM, OR
                </li>
                <li>ONE HUNDRED DOLLARS ($100.00 USD)</li>
              </ul>
              <p>
                <strong>Health-Related Limitations:</strong>
              </p>
              <p>
                YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT ECZEMATE SHALL HAVE NO
                LIABILITY WHATSOEVER FOR:
              </p>
              <ul>
                <li>
                  Any health outcomes, medical conditions, complications, or
                  adverse events that may arise from your use of or reliance on
                  the App
                </li>
                <li>
                  Any decisions you make regarding your health, medical
                  treatment, product use, or lifestyle based on information
                  from the App
                </li>
                <li>
                  Any failures or inaccuracies in flare-up predictions, risk
                  assessments, or AI analysis
                </li>
                <li>
                  Any allergic reactions, skin irritation, or other adverse
                  effects from products identified through the product scanning
                  feature
                </li>
              </ul>
              <p>
                <strong>Jurisdictional Variations:</strong>
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of
                certain damages or liability. In such jurisdictions, the
                limitations and exclusions in this section shall apply only to
                the maximum extent permitted by applicable law. If you are a
                consumer in the European Economic Area, the limitations in this
                section do not apply to liability for death or personal injury
                caused by negligence, fraud, or fraudulent misrepresentation.
              </p>
              <p>
                <strong>Basis of the Bargain:</strong>
              </p>
              <p>
                You acknowledge that the limitations of liability set forth in
                this section are fundamental elements of the agreement between
                you and Eczemate, and that the App would not be provided to you
                without these limitations.
              </p>
            </Section>

            <Section title="14. Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless Eczemate, its
                affiliates, licensors, service providers, and their respective
                officers, directors, employees, contractors, agents, licensors,
                and suppliers from and against any and all claims, liabilities,
                damages, judgments, awards, losses, costs, expenses, or fees
                (including reasonable attorneys&apos; fees) arising out of or
                relating to:
              </p>
              <ul>
                <li>
                  Your violation of these Terms or any applicable law or
                  regulation
                </li>
                <li>
                  Your violation of any rights of any third party, including
                  intellectual property rights or privacy rights
                </li>
                <li>
                  Your use or misuse of the App, including any reliance on
                  content, predictions, analysis, or recommendations provided
                  by the App
                </li>
                <li>
                  Any medical decisions you make based on information obtained
                  through the App
                </li>
                <li>
                  Any User Content you submit, post, or transmit through the
                  App
                </li>
                <li>
                  Your breach of any representation or warranty contained in
                  these Terms
                </li>
                <li>
                  Any dispute you have with another user of the App
                </li>
                <li>
                  Your negligence or willful misconduct in connection with the
                  App
                </li>
              </ul>
              <p>
                This indemnification obligation will survive the termination of
                your account and your use of the App.
              </p>
              <p>
                We reserve the right to assume the exclusive defense and
                control of any matter otherwise subject to indemnification by
                you, in which event you will cooperate with us in asserting any
                available defenses.
              </p>
            </Section>

            <Section title="15. Termination">
              <p>
                <strong>Termination by You:</strong>
              </p>
              <p>
                You may stop using the App and delete your account at any time.
                To delete your account, you can use the account deletion
                feature in the App settings. Upon account deletion:
              </p>
              <ul>
                <li>
                  Your access to the App and Eczemate Pro features will
                  immediately cease
                </li>
                <li>
                  Your User Content will be deleted from active systems
                  (subject to backup retention periods)
                </li>
                <li>
                  If you have an active Eczemate Pro subscription, you must
                  separately cancel it through your app store account to avoid
                  future charges
                </li>
                <li>
                  Account deletion does not automatically cancel your
                  subscription or entitle you to a refund
                </li>
              </ul>
              <p>
                <strong>Termination by Us:</strong>
              </p>
              <p>
                We may suspend, restrict, or terminate your access to the App
                at any time, with or without notice, for any reason or no
                reason, including but not limited to:
              </p>
              <ul>
                <li>Violation of these Terms or our Acceptable Use Policy</li>
                <li>
                  Engaging in fraudulent, abusive, or illegal activities
                </li>
                <li>
                  Creating multiple accounts or sharing account credentials
                </li>
                <li>
                  Attempting to circumvent security measures or access
                  restrictions
                </li>
                <li>
                  Failure to pay subscription fees (if applicable through app
                  store)
                </li>
                <li>
                  At our discretion, for business, operational, or regulatory
                  reasons
                </li>
              </ul>
              <p>
                If we terminate your account for violation of these Terms, you
                may not be eligible to create a new account.
              </p>
              <p>
                <strong>Effect of Termination:</strong>
              </p>
              <p>
                Upon termination of your account or access to the App for any
                reason:
              </p>
              <ul>
                <li>
                  All licenses and rights granted to you in these Terms will
                  immediately cease
                </li>
                <li>
                  You must immediately cease all use of the App
                </li>
                <li>
                  We may delete your account data and User Content in
                  accordance with our data retention policies
                </li>
                <li>
                  We are not required to provide you with a copy of your User
                  Content upon termination
                </li>
                <li>
                  You will not be entitled to any refund of subscription fees
                  unless required by law
                </li>
              </ul>
              <p>
                <strong>Survival:</strong>
              </p>
              <p>
                The following sections of these Terms will survive any
                termination or expiration: Medical Disclaimer (Section 3), User
                Content and Data (Section 6) (to the extent necessary for us to
                process deletion), Intellectual Property Rights (Section 9),
                Disclaimer of Warranties (Section 12), Limitation of Liability
                (Section 13), Indemnification (Section 14), Dispute Resolution
                (Section 16), and Governing Law (Section 20).
              </p>
              <p>
                <strong>No Liability:</strong>
              </p>
              <p>
                We shall not be liable to you or any third party for any
                termination or suspension of your access to the App.
              </p>
            </Section>

            <Section title="16. Dispute Resolution and Arbitration">
              <p>
                <strong>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR
                LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT
                AND TO HAVE A JURY HEAR YOUR CLAIMS.</strong>
              </p>
              <p>
                <strong>Informal Resolution First:</strong>
              </p>
              <p>
                Before filing a claim against Eczemate, you agree to try to resolve
                the dispute informally by contacting us at heyo@foresightcomputers.com. We
                will try to resolve the dispute informally by contacting you.
                If a dispute is not resolved within sixty (60) days after
                submission, you or Eczemate may bring a formal proceeding.
              </p>
              <p>
                <strong>Binding Arbitration:</strong>
              </p>
              <p>
                If we cannot resolve a dispute informally, any dispute, claim,
                or controversy arising out of or relating to these Terms or the
                App (a &quot;Dispute&quot;) will be resolved by binding
                arbitration, rather than in court, except that:
              </p>
              <ul>
                <li>
                  You may assert claims in small claims court if your claims
                  qualify and remain in small claims court
                </li>
                <li>
                  You or Eczemate may seek equitable relief in court for
                  infringement or misuse of intellectual property rights
                </li>
              </ul>
              <p>
                The Federal Arbitration Act governs the interpretation and
                enforcement of this arbitration provision. The arbitration will
                be conducted by a neutral arbitrator in accordance with the
                American Arbitration Association&apos;s (AAA) Consumer
                Arbitration Rules then in effect, except as modified by this
                section.
              </p>
              <p>
                <strong>No Class Actions:</strong>
              </p>
              <p>
                YOU AND ECZEMATE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER
                ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF
                OR CLASS MEMBER IN ANY PURPORTED CLASS, REPRESENTATIVE, OR
                COLLECTIVE ACTION OR PROCEEDING. Unless both you and Eczemate
                agree, no arbitrator or judge may consolidate more than one
                person&apos;s claims or otherwise preside over any form of
                representative or class proceeding.
              </p>
              <p>
                <strong>Arbitration Procedures:</strong>
              </p>
              <ul>
                <li>
                  The arbitration will be conducted by telephone, online, or
                  based solely on written submissions, as you choose
                </li>
                <li>
                  The arbitrator may award any relief that a court could award,
                  including attorneys&apos; fees when authorized by law
                </li>
                <li>
                  The arbitrator&apos;s decision will be final and binding, and
                  judgment on the award may be entered in any court with
                  jurisdiction
                </li>
                <li>
                  The arbitration proceeding and its result will be kept
                  confidential
                </li>
              </ul>
              <p>
                <strong>Costs of Arbitration:</strong>
              </p>
              <p>
                Payment of all filing, administration, and arbitrator fees will
                be governed by the AAA&apos;s Consumer Arbitration Rules.
              </p>
              <p>
                <strong>Opt-Out of Arbitration:</strong>
              </p>
              <p>
                You have the right to opt out of binding arbitration within
                thirty (30) days of first accepting these Terms by sending
                written notice of your decision to opt out to heyo@foresightcomputers.com
                with the subject line &quot;ARBITRATION OPT-OUT.&quot; Your
                notice must include your name, address, and a clear statement
                that you want to opt out of this arbitration agreement. If you
                opt out, all other parts of these Terms will continue to apply.
                Opting out has no effect on any previous, other, or future
                arbitration agreements you may have with us.
              </p>
              <p>
                <strong>Exceptions to Arbitration:</strong>
              </p>
              <p>
                Either you or Eczemate may assert claims, if they qualify, in small
                claims court in the county where you reside or in the county
                where Eczemate&apos;s principal place of business is located.
                Additionally, either party may seek equitable relief in any
                court of competent jurisdiction to prevent the actual or
                threatened infringement, misappropriation, or violation of a
                party&apos;s copyrights, trademarks, trade secrets, patents, or
                other intellectual property rights.
              </p>
              <p>
                <strong>Severability of Arbitration Provision:</strong>
              </p>
              <p>
                If any part of this arbitration provision is found to be
                invalid or unenforceable, then the entirety of this arbitration
                provision shall be null and void, and the Dispute will be
                resolved in court subject to the venue and choice of law
                provisions below. However, the waiver of class actions and
                representative proceedings is essential, and if that waiver is
                found to be unenforceable, then the entirety of this
                arbitration provision will be deemed void.
              </p>
            </Section>

            <Section title="17. Modifications to Terms">
              <p>
                We reserve the right to modify, update, or change these Terms
                at any time at our sole discretion. When we make changes, we
                will:
              </p>
              <ul>
                <li>
                  Update the &quot;Last updated&quot; date at the top of these
                  Terms
                </li>
                <li>
                  Post the updated Terms in the App and on our website
                </li>
                <li>
                  Provide notice of material changes through the App, via
                  email, or through other reasonable means
                </li>
              </ul>
              <p>
                <strong>Material Changes:</strong>
              </p>
              <p>
                For material changes to these Terms (such as significant
                changes to the scope of services, pricing structure, liability
                provisions, or dispute resolution mechanisms), we will provide
                at least thirty (30) days&apos; advance notice before the
                changes take effect, unless:
              </p>
              <ul>
                <li>
                  We are required to make changes sooner to comply with legal
                  or regulatory requirements
                </li>
                <li>
                  The changes are necessary to address security or operational
                  issues
                </li>
                <li>
                  The changes are beneficial to you and do not materially
                  reduce your rights
                </li>
              </ul>
              <p>
                <strong>Acceptance of Changes:</strong>
              </p>
              <p>
                Your continued use of the App after the effective date of any
                changes to these Terms constitutes your acceptance of the
                revised Terms. If you do not agree to the modified Terms, you
                must stop using the App and may delete your account.
              </p>
              <p>
                <strong>No Retroactive Application:</strong>
              </p>
              <p>
                Changes to these Terms will not apply retroactively and will
                only take effect on a going-forward basis, except to the extent
                required by law.
              </p>
              <p>
                <strong>Version History:</strong>
              </p>
              <p>
                We may maintain an archive of prior versions of these Terms.
                You may request a copy of previous versions by contacting us at
                heyo@foresightcomputers.com.
              </p>
            </Section>

            <Section title="18. Severability">
              <p>
                If any provision of these Terms is found to be invalid,
                illegal, or unenforceable by a court or arbitrator of competent
                jurisdiction, such provision shall be modified to the minimum
                extent necessary to make it valid, legal, and enforceable while
                preserving its intent. If such modification is not possible,
                the invalid, illegal, or unenforceable provision shall be
                severed from these Terms.
              </p>
              <p>
                The invalidity, illegality, or unenforceability of any
                provision shall not affect the validity, legality, or
                enforceability of any other provision of these Terms, which
                shall remain in full force and effect.
              </p>
              <p>
                However, if the severance of a particular provision would
                materially alter the fundamental nature of the agreement
                between you and Eczemate, these Terms may be terminated in their
                entirety.
              </p>
            </Section>

            <Section title="19. Entire Agreement">
              <p>
                These Terms, together with our Privacy Policy and any other
                legal notices or additional terms published by us in the App,
                constitute the entire agreement between you and Eczemate regarding
                your use of the App and supersede all prior and contemporaneous
                understandings, agreements, representations, and warranties,
                both written and oral, regarding the App.
              </p>
              <p>
                No agency, partnership, joint venture, employment, or
                franchisee relationship is created between you and Eczemate as a
                result of these Terms or your use of the App.
              </p>
              <p>
                You may not assign or transfer these Terms or your rights and
                obligations under these Terms, by operation of law or
                otherwise, without our prior written consent. Any attempt to do
                so will be void. We may assign these Terms at any time without
                notice or consent.
              </p>
            </Section>

            <Section title="20. Governing Law and Jurisdiction">
              <p>
                These Terms and any dispute or claim arising out of or in
                connection with them or their subject matter (including
                non-contractual disputes or claims) shall be governed by and
                construed in accordance with the laws of the United States and
                the State of Delaware, without regard to its conflict of law
                provisions.
              </p>
              <p>
                To the extent that any lawsuit or court proceeding is permitted
                under these Terms (such as if you opt out of arbitration or for
                matters not subject to arbitration), you and Eczemate agree to
                submit to the exclusive jurisdiction of the state and federal
                courts located in Delaware for the purpose of litigating all
                such disputes.
              </p>
              <p>
                <strong>International Users:</strong>
              </p>
              <p>
                The App is controlled and operated from the United States. If
                you access the App from outside the United States, you do so at
                your own risk and are responsible for compliance with the laws
                of your jurisdiction. By using the App, you consent to the
                transfer of your information to the United States, which may
                have different data protection laws than your country of
                residence.
              </p>
              <p>
                <strong>European Economic Area Users:</strong>
              </p>
              <p>
                If you are a consumer located in the European Economic Area,
                you will benefit from any mandatory provisions of the law of
                the country in which you are resident. Nothing in these Terms
                affects your rights as a consumer under mandatory local laws.
              </p>
            </Section>

            <Section title="21. Contact Us">
              <p>
                If you have any questions, concerns, or complaints about these
                Terms of Use, the App, or our practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> heyo@foresightcomputers.com
              </p>
              <p>
                We will make reasonable efforts to respond to your inquiry
                within a reasonable timeframe.
              </p>
              <p>
                For privacy-related inquiries, please refer to the contact
                information in our Privacy Policy.
              </p>
              <p>
                For subscription billing inquiries, please contact Apple
                Support or Google Play Support, as all billing is managed
                through the respective app stores.
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
