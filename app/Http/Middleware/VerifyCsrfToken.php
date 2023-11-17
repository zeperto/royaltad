<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'http://127.0.0.1:8000/api/register',
        'http://localhost:8000/api/register',
        'http://127.0.0.1:8000/api/login',
        'http://localhost:8000/api/login',
        'http://127.0.0.1:8000/api/adminLogin',
        'http://localhost:8000/api/adminLogin',
        'http://127.0.0.1:8000/api/admin/addProduct',
        'http://localhost:8000/api/admin/addProduct',
        'http://127.0.0.1:8000/api/admin/getProduct',
        'http://localhost:8000/api/admin/getProduct',
    ];
}
