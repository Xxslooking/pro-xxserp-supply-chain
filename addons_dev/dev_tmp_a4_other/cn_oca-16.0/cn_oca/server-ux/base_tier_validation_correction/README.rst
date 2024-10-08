===============================
Base Tier Validation Correction
===============================

.. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   !! This file is generated by oca-gen-addon-readme !!
   !! changes will be overwritten.                   !!
   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.. |badge1| image:: https://img.shields.io/badge/maturity-Alpha-red.png
    :target: https://odoo-community.org/page/development-status
    :alt: Alpha
.. |badge2| image:: https://img.shields.io/badge/licence-AGPL--3-blue.png
    :target: http://www.gnu.org/licenses/agpl-3.0-standalone.html
    :alt: License: AGPL-3
.. |badge3| image:: https://img.shields.io/badge/github-OCA%2Fserver--ux-lightgray.png?logo=github
    :target: https://github.com/OCA/server-ux/tree/14.0/base_tier_validation_correction
    :alt: OCA/server-ux
.. |badge4| image:: https://img.shields.io/badge/weblate-Translate%20me-F47D42.png
    :target: https://translation.odoo-community.org/projects/server-ux-14-0/server-ux-14-0-base_tier_validation_correction
    :alt: Translate me on Weblate
.. |badge5| image:: https://img.shields.io/badge/runbot-Try%20me-875A7B.png
    :target: https://runbot.odoo-community.org/runbot/250/14.0
    :alt: Try me on Runbot

|badge1| |badge2| |badge3| |badge4| |badge5| 

This module provide a new operation to correct the information in tier.review for any document under tier validation.

For example, a document started validation, a tier review is assigned to Mr. Smith.

However, since Mr. Smith has urgent business oversea for a few days,
all document need to get approved by Mr. John as person in charge.

This module allow user with Tier Review Correction role to change the reviewer to Mr. John.

Note: Currently, only correction type available is to reassign the reviewer, but it is possible to add in the future.

.. IMPORTANT::
   This is an alpha version, the data model and design can change at any time without warning.
   Only for development or testing purpose, do not use in production.
   `More details on development status <https://odoo-community.org/page/development-status>`_

**Table of contents**

.. contents::
   :local:

Configuration
=============

Person that can use the tier review correction, must has access right to group *Tier Review Correction*

Usage
=====

To create/edit Tier Review Correction

* Login as user with Tier Review Correction role
* Go to menu Settings > Technical > Tier Validation > Tier Review Correction
* Create a new tier correction, by selecting,

  * Correction Type, in this case, Reassign Reviewer(s)
  * Document Model, i.e., Purchase order
* Find documents with pending reviews by,

  * Reviewer(s)
  * Name Search
* Then set default value to change, in this case,

  * New Reviewer(s)
* Click button "Prepare", if any document matched, it should list in Correction Detail table.
* For each correction line, user can still change the affected tier reviews, and new reviewers.
* Click button "Make Correction" to finalize the operation.
* As an option, click on "Revert Back" to set back to original status.

  * For case Reassign Reviewer(s), system to get the original reviewers from tier definition as set it back.

Quick access, from a working document, to create/view Tier Review Correction

* As user with Tier Review Correction role
* On any document, i.e., Purchase Order, with validation already started.
* On the yellow banner (pending state), click on "Change Reviewer" link on its right side.

  * If this document has no Correction yet, it will create new.
  * If the document already has some Corrections, it will show those corrections.

To run the Tier Review Correction by scheduled job

* As user with Tier Review Correction role
* On any Tier Review Correction, open tab "Scheduled Action"
* Setup the datetime to Scheduled Correct and Scheduled Revert. By default,
  scheduled action "Tier Correction Scheduler" will run every 1 hour.

Bug Tracker
===========

Bugs are tracked on `GitHub Issues <https://github.com/OCA/server-ux/issues>`_.
In case of trouble, please check there if your issue has already been reported.
If you spotted it first, help us smashing it by providing a detailed and welcomed
`feedback <https://github.com/OCA/server-ux/issues/new?body=module:%20base_tier_validation_correction%0Aversion:%2014.0%0A%0A**Steps%20to%20reproduce**%0A-%20...%0A%0A**Current%20behavior**%0A%0A**Expected%20behavior**>`_.

Do not contact contributors directly about support or help with technical issues.

Credits
=======

Authors
~~~~~~~

* Ecosoft

Contributors
~~~~~~~~~~~~

* Kitti U. <kittiu@ecosoft.co.th>
* Bill Yang <controlwave@outlook.com>

Maintainers
~~~~~~~~~~~

This module is maintained by the OCA.

.. image:: https://odoo-community.org/logo.png
   :alt: Odoo Community Association
   :target: https://odoo-community.org

OCA, or the Odoo Community Association, is a nonprofit organization whose
mission is to support the collaborative development of Odoo features and
promote its widespread use.

.. |maintainer-kittiu| image:: https://github.com/kittiu.png?size=40px
    :target: https://github.com/kittiu
    :alt: kittiu

Current `maintainer <https://odoo-community.org/page/maintainer-role>`__:

|maintainer-kittiu| 

This module is part of the `OCA/server-ux <https://github.com/OCA/server-ux/tree/14.0/base_tier_validation_correction>`_ project on GitHub.

You are welcome to contribute. To learn how please visit https://odoo-community.org/page/Contribute.
