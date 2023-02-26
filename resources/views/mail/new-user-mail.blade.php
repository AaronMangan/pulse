<x-mail::message>
# Account Verification

You have been registered for an account with Pulse.

Please click the button below to confirm you account and get started.

<x-mail::button :url="''">
Verify Account
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
