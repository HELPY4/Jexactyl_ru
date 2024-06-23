<?php

namespace Jexactyl\Http\Controllers\Api\Client;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnnouncementsController extends ClientApiController
{
    /**
     * @param Request $request
     * @return array
     */
    public function index(Request $request): array
    {
        $announcements = DB::table('announcements')->orderBy('updated_at', 'DESC')->get();

        return [
            'success' => true,
            'data' => [
                'announcements' => $announcements,
            ],
        ];
    }
}
