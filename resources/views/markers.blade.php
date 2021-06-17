<script src="{{ asset('js/markers.js') }}"></script>
<script src="{{ asset('js/prism.js') }}"></script>
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Markers') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    Hi Markers

                    <!-- Mark Table -->
                <table id="markers_tab" class="w-full">
                    <thead>
                    <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th class="px-4 py-3">Identifier</th>
                        <th class="px-4 py-3">Label</th>
                        <th class="px-4 py-3">Invisible</th>
                        <th class="px-4 py-3">Replace maker width adress</th>
                        <th class="px-4 py-3">color</th>
                        <th class="px-4 py-3">active</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
                    </br>
                    <div id="alert_get_markers_placeholder"></div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
<script src="{{ asset('js/markers.js') }}"></script>


