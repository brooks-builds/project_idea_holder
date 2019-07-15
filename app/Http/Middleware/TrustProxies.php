<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Fideloper\Proxy\TrustProxies as Middleware;

class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string
     */
    // protected $proxies;
    // set up for Heroku, previous comment is original
    protected $proxies = '*';

    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    // protected $headers = Request::HEADER_X_FORWARDED_ALL;
    // set up for Heroku, previous comment is original
    protected $headers = Request::HEADER_X_FORWARDED_AWS_ELB;
}
