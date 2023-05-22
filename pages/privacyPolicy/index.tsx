import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Item, { PrivacyPolicyItemType } from './Item';

const items: PrivacyPolicyItemType[] = [
  {
    heading: 'Definition of terms',
    items: [
      {
        heading: 'The following terms are used in this Privacy Policy:',
        items: [
          '"Site Administration" (here in after referred to as the "Administration") - authorized employees to manage the ARGUS Door Store website, who organize and (or) carry out the processing of personal data, and also determine the purposes of processing personal data, the composition of personal data to be processed, actions(operations) committed with personal data.',
          '"Personal data" - any information relating to a directly or indirectly identified or identifiable natural person(subject of personal data).',
          '"Processing of personal data" - any action (operation) or a set of actions (operations) performed using automation tools or without using such tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.',
          '“Confidentiality of personal data” is a mandatory requirement +rson who has access to personal data to prevent their distribution without the consent of the subject of personal data or other legal grounds.',
          '"Website Shop entrance doors ARGUS" - a collection of interconnected web pages hosted on the Internet at a unique address(URL): argus196.ru, as well as its subdomains.',
          '“Subdomains” are pages or a set of pages located on third - level domains belonging to the ARGUS Entrance Door Store website, as well as other temporary pages, at the bottom of which the Administration’s contact information is indicated',
          '“User of the ARGUS Entrance Doors Store website” (hereinafter referred to as the User) is a person who has access to the ARGUS Entrance Doors Store website via the Internet and uses the information, materials and products of the ARGUS Entrance Doors Store website.',
          'A "cookie" is a small piece of data sent by a web server and stored on the user\'s computer, which the web client or web browser sends to the web server in an HTTP request every time it tries to open a page of the corresponding site.',
          '"IP-address" - a unique network address of a node in a computer network through which the User gains access to the ARGUS Entrance Door Store.',
          '"Product" - a product that the User orders on the site and pays through payment systems.',
        ],
      },
    ]
  },
  {
    heading: 'General provisions',
    items: [
      'The use of the ARGUS Entrance Door Store website by the User means acceptance of this Privacy Policy and the terms of processing of the User\'s personal data.',
      'In case of disagreement with the terms of the Privacy Policy, the User must stop using the ARGUS Entrance Door Store website.',
      'This Privacy Policy applies to the ARGUS Entrance Door Store website.The ARGUS Entrance Doors Store does not control and is not responsible for third - party websites to which the User can follow the links available on the ARGUS Entrance Doors Store website.',
      'The Administration does not verify the accuracy of personal data provided by the User.',
    ]
  },
  {
    heading: 'Subject of the privacy policy',
    items: [
      'This Privacy Policy establishes the obligations of the Administration for non - disclosure and ensuring the confidentiality of personal data that the User provides at the request of the Administration when registering on the ARGUS Front Door Store website, when subscribing to an e-mail newsletter or when placing an order.',
      {
        heading: 'Personal data authorized for processing under this Privacy Policy is provided by the User by filling out forms on the ARGUS Front Door Store website and includes the following information:',
        items: [
          'surname, name, patronymic of the User;',
          'contact phone number of the User;',
          'e-mail address (e-mail)',
          'place of residence of the User (if necessary)',
          'delivery address of the Goods (if necessary)',
          'photograph (if necessary).',
        ],
      },
      {
        heading: 'The ARGUS entrance door store protects Data that is automatically transmitted when visiting the pages:',
        list: [
          'IP address;',
          'information from cookies;',
          'browser information;',
          'access time;',
          'referrer(address of the previous page).',
        ],
        items: [
          'Disabling cookies may result in the inability to access parts of the site that require authorization.',
          'The ARGUS entrance door store collects statistics about the IP addresses of its visitors.This information is used to prevent, detect and resolve technical problems.',
        ]
      },
      'Any other personal information not specified above(visit history, browsers used, operating systems, etc.) is subject to secure storage and non - distribution, except as provided in paragraphs. 5.2 and 5.3 of this Privacy Policy.',
    ]
  },
  {
    heading: 'Purpose of collecting user\'s personal information',
    items: [
      'The Administration can use the User\'s personal data for the following purposes:',
      {
        heading: 'Identification of the User registered on the ARGUS Entrance Door Store website for further authorization, ordering and other actions.',
        items: [
          'Providing the User with access to the personalized data of the ARGUS Entrance Door Store website.',
          'Establishing feedback with the User, including sending notifications, requests regarding the use of the ARGUS Entrance Doors Store website, providing services and processing requests and applications from the User.',
          'Determining the location of the User to ensure security, prevent fraud.',
          'Confirmation of the accuracy and completeness of personal data provided by the User.',
          'Creating an account for using parts of the ARGUS Door Store website, if the User has agreed to create an account.',
          'User notifications by email.',
          'Providing the User with effective technical support in case of problems related to the use of the ARGUS Entrance Door Store website.',
          'Providing the User, with his consent, with special offers, information on prices, newsletters and other information on behalf of the ARGUS Entrance Door Store website.',
          'Implementation of advertising activities with the consent of the User.',
        ],
      },
    ]
  },
  {
    heading: 'Methods and terms of processing personal information',
    items: [
      'The processing of the User\'s personal data is carried out without time limit, in any legal way, including in personal data information systems using automation tools or without using such tools.',
      'The User agrees that the Administration has the right to transfer personal data to third parties, in particular, courier services, postal organizations(including electronic), telecommunication operators, solely for the purpose of fulfilling the User\'s order placed on the ARGUS Entrance Door Store website, including delivery Goods, documentation or e-mail messages.',
      'The User\'s personal data may be transferred to the authorized state authorities of the Russian Federation only on the grounds and in the manner established by the legislation of the Russian Federation.',
      'In case of loss or disclosure of personal data, the Administration has the right not to inform the User about the loss or disclosure of personal data.',
      'The Administration takes the necessary organizational and technical measures to protect the User\'s personal information from unauthorized or accidental access, destruction, modification, blocking, copying, distribution, as well as from other illegal actions of third parties.',
      'The Administration, together with the User, takes all necessary measures to prevent losses or other negative consequences caused by the loss or disclosure of the User\'s personal data.',
    ]
  },
  {
    heading: 'Rights and obligations of the parties',
    items: [
      {
        heading: 'The user has the right:',
        items: [
          'Make a free decision on the provision of your personal data necessary for using the ARGUS Front Door Store website, and consent to their processing.', 
          'Update, supplement the provided information about personal data in case of changes in this information.', 
          'The user has the right to receive information from the Administration regarding the processing of his personal data, if such right is not limited in accordance with federal laws.The user has the right to require the Administration to clarify his personal data, block or destroy them if the personal data is incomplete, outdated, inaccurate, illegally obtained or not necessary for the stated purpose of processing, as well as take measures provided by law to protect their rights.', 
        ]
      },
      {
        heading: 'The administration is obliged:',
        items: [
          'Use the information received solely for the purposes specified in clause 4 of this Privacy Policy.',
          'Ensure that confidential information is kept secret, not disclosed without the prior written permission of the User, and also not to sell, exchange, publish, or disclose in other possible ways the transferred personal data of the User, with the exception of clauses 5.2 and 5.3 of this Privacy Policy.',
          'Take precautions to protect the confidentiality of the User\'s personal data in accordance with the procedure commonly used for I protect this kind of information in existing business transactions.',
          'Block personal data relating to the relevant User from the moment of the request or request of the User, or his legal representative or authorized body for the protection of the rights of subjects of personal data for the period of verification, in case of revealing inaccurate personal data or illegal actions.',
        ]
      }
    ]
  },
  {
    heading: 'Responsibilities of the parties',
    items: [
      'The Administration, which has not fulfilled its obligations, is liable for losses incurred by the User in connection with the unlawful use of personal data, in accordance with the legislation of the Russian Federation, with the exception of cases provided for in paragraphs 5.2, 5.3 and 7.2 of this Privacy Policy.',
      {
        heading: 'In case of loss or disclosure of Confidential Information, the Administration is not responsible if this confidential information:',
        items: [
          'Became public property before its loss or disclosure.',
          'It was received from a third party until it was received by the Resource Administration.',
          'Was disclosed with the consent of the User.',
        ]
      },
      'The user is fully responsible for compliance with the requirements of the legislation of the Russian Federation, including laws on advertising, on the protection of copyright and related rights, on the protection of trademarks and service marks, but not limited to the above, including full responsibility for the content and form of materials.',
      'The user acknowledges that the responsibility for any information(including, but not limited to: data files, texts, etc.), to which he can have access as part of the ARGUS Entrance Door Store website, is borne by the person who provided such information.',
      'The User agrees that the information provided to him as part of the ARGUS Entrance Door Store website may be an intellectual property object, the rights to which are protected and belong to other Users, partners or advertisers who place such information on the ARGUS Entrance Door Store website.',
      'The User may not modify, lease, loan, sell, distribute or create derivative works based on such Content(in whole or in part), unless such actions have been expressly authorized in writing by the owners of such Content in accordance with terms of a separate agreement.',
      'In relation to text materials(articles, publications that are in free public access on the ARGUS Entrance Doors Store website), their distribution is allowed provided that a link to the ARGUS Entrance Doors Store is given.',
      'The Administration is not liable to the User for any loss or damage incurred by the User as a result of the deletion, failure or inability to save any Content and other communication data contained on the ARGUS Entrance Door Store website or transmitted through it.',
      'The administration is not responsible for any direct or indirect losses that occurred due to: the use or inability to use the site or individual services; unauthorized access to the User\'s communications; statements or conduct of any third party on the site.',
      'The administration is not responsible for any information posted by the user on the ARGUS Entrance Door Store website, including, but not limited to: copyrighted information, without the express consent of the copyright owner.',
    ]
  },
  {
    heading: 'Disputes resolution',
    items: [
      'Before going to court with a claim for disputes arising from the relationship between the User and the Administration, it is mandatory to submit a claim(a written proposal or an electronic proposal for a voluntary settlement of the dispute).',
      'The recipient of the claim within 30 calendar days from the date of receipt of the claim, in writing or in electronic form, notifies the claimant of the results of the consideration of the claim.',
      'If an agreement is not reached, the dispute will be referred to the Arbitration Court of Yekaterinburg.',
      'The current legislation of the Russian Federation applies to this Privacy Policy and the relationship between the User and the Administration.',
    ]
  },
  {
    heading: 'Additional terms',
    items: [
      'The Administration has the right to make changes to this Privacy Policy without the consent of the User.',
      'The new Privacy Policy comes into force from the moment it is posted on the ARGUS Entrance Door Store website, unless otherwise provided by the new version of the Privacy Policy.',
      'All suggestions or questions regarding this Privacy Policy should be reported to: sale@argus196.ru',
    ]
  },
];

const breadcrumbsItems = [
  {
    name: 'Privacy policy',
  },
] as BreadcrumbsItemType[];

const PrivacyPolicy: FC = () => {
  let Items = items.map((i, index) => <Item {...i} id={index + 1} key={index} />);

  return <>
    <Head>
      <title>Privacy policy | Doorastos</title>
      <meta name="description" content="Privacy policy" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className=''>
        <div className='flex flex-col gap-y-2.5'>
          <h6 className='text-light text-grey1 font-semibold'>Privacy policy</h6>
          <p className='text-esm leading-[30px]'>This Personal Data Privacy Policy(hereinafter referred to as the Privacy Policy) applies to all information that the site argus196.ru - ARGUS Entrance Door Store, (hereinafter referred to as the ARGUS Entrance Door Store) located on the domain name argus196.ru(as well as its subdomains), can get about the User while using the site argus196.ru(as well as its subdomains), its programs and its products.</p>
        </div>
        <div className='flex flex-col gap-y-10 leading-[30px] mt-10'>
          {Items}
        </div>
        <div className='flex flex-col gap-y-1 mt-2.5'>
          <p className='text-esm'>Updated: 15 August 2018</p>
          <p className='text-esm'>Ekaterinburg, OGRNIP 316965800157317</p>
        </div>
      </div>
    </main>
  </>
};

export default PrivacyPolicy;